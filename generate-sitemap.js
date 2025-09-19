import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.nextsaimon.com';
const APP_DIR = path.join(process.cwd(), 'src', 'app');
const OUTPUT_FILE = path.join(process.cwd(), 'public', 'sitemap.xml');

function walkDir(dir, parent = '') {
  let urls = [];

  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item.startsWith('.') || item === 'node_modules') continue;
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      const subParent = parent + '/' + item;
      urls = urls.concat(walkDir(fullPath, subParent));
    } else if (stats.isFile()) {
      // Include only actual Next.js page files
      if (item === 'page.js' || item === 'page.jsx' || item === 'page.tsx') {
        let urlPath = parent; // route is folder name
        if (urlPath === '') urlPath = '/'; // root page
        urls.push(urlPath);
      }
    }
  }

  return urls;
}

const pages = walkDir(APP_DIR);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;

pages.forEach(page => {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page}</loc>\n`;
  xml += `    <changefreq>always</changefreq>\n`;
  xml += `    <priority>1.0</priority>\n`;
  xml += `  </url>\n\n`;
});

xml += `</urlset>`;

fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');
console.log('✅ sitemap.xml generated at', OUTPUT_FILE);
