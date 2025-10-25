import fs from "fs";
import path from "path";

export const runtime = "edge";

const DOMAIN = process.env.SITE_DOMAIN || "https://nextsaimon.com";
const APP_DIR = path.join(process.cwd(), "src", "app");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SITEMAP_FILE = path.join(PUBLIC_DIR, "sitemap.xml");
const ROBOTS_FILE = path.join(PUBLIC_DIR, "robots.txt");

function walkDir(dir, parent = "") {
  let urls = [];

  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item.startsWith(".") || item === "node_modules") continue;
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      const subParent = parent + "/" + item;
      urls = urls.concat(walkDir(fullPath, subParent));
    } else if (stats.isFile()) {
      if (["page.js", "page.jsx", "page.tsx"].includes(item)) {
        let urlPath = parent || "/";
        urls.push(urlPath);
      }
    }
  }

  return urls;
}

function parseExistingSitemap(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/url>/g;
  let match;
  const urls = [];
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pass = searchParams.get("pass");
  const extraUrl = searchParams.get("url");
  const extraPriority = searchParams.get("priority")
    ? parseFloat(searchParams.get("priority"))
    : 0.7;

  if (!pass || pass !== process.env.SITEMAP_PASS) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  try {
    // 1️⃣ Get app pages
    const appPages = walkDir(APP_DIR).map((page) => ({
      loc: DOMAIN + page,
      priority: page === "/" ? 1.0 : 0.7,
    }));

    // 2️⃣ Read existing sitemap URLs
    const existingUrls = parseExistingSitemap(SITEMAP_FILE).map((url) => ({
      loc: url,
      priority: 0.7,
    }));

    // 3️⃣ Add extra URL if provided
    const extraPages = extraUrl
      ? [{ loc: extraUrl, priority: extraPriority }]
      : [];

    // 4️⃣ Combine all pages
    const combined = [...appPages, ...existingUrls, ...extraPages];

    // 5️⃣ Remove duplicates (keep first occurrence)
    const uniquePagesMap = new Map();
    combined.forEach((p) => {
      if (!uniquePagesMap.has(p.loc)) uniquePagesMap.set(p.loc, p);
    });
    const uniquePages = Array.from(uniquePagesMap.values());

    // 6️⃣ Build XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;

    uniquePages.forEach((p) => {
      xml += `  <url>\n`;
      xml += `    <loc>${p.loc}</loc>\n`;
      xml += `    <changefreq>always</changefreq>\n`;
      xml += `    <priority>${p.priority}</priority>\n`;
      xml += `  </url>\n\n`;
    });

    xml += `</urlset>`;

    // 7️⃣ Write sitemap.xml
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    fs.writeFileSync(SITEMAP_FILE, xml, "utf8");

    // 8️⃣ Write robots.txt
    const robotsContent = `User-agent: *
Allow: /

Host: ${DOMAIN}

Sitemap: ${DOMAIN}/sitemap.xml
`;
    fs.writeFileSync(ROBOTS_FILE, robotsContent, "utf8");

    return new Response(
      JSON.stringify({
        message: "✅ sitemap.xml and robots.txt updated",
        sitemap: "/sitemap.xml",
        robots: "/robots.txt",
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to update sitemap/robots.txt" }),
      { status: 500 }
    );
  }
}
