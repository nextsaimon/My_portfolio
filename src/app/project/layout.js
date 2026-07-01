export const metadata = {
  title: "Saimon – Projects",
  description:
    "Welcome to Saimon's projects! Discover my skills in web development, design, and programming. Explore my projects and learn more about my work.",
  keywords:
    "Saimon, web developer, software developer, front-end development, full-stack development, programming, coding, portfolio, web projects, JavaScript, React, HTML, CSS, NextJs, TailwindCSS, Bootstrap, responsive design, developer portfolio, UHSC, UHSCIAN",

  metadataBase: new URL("https://nextsaimon.com"),

  alternates: {
    canonical: "https://nextsaimon.com",
  },

  openGraph: {
    title: "Saimon – Projects",
    description:
      "Welcome to Saimon's projects! Discover my skills in web development, design, and programming.",
    url: "https://nextsaimon.com/",
    siteName: "Saimon's projects",
    images: [
      {
        url: "https://nextsaimon.com/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Saimon's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saimon – Projects",
    description:
      "Welcome to Saimon's projects! Discover my skills in web development, design, and programming.",
    images: ["https://nextsaimon.com/profile-pic.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Saimon",
            url: "https://nextsaimon.com",
            image: "https://nextsaimon.com/favicon.ico",
            sameAs: [
              "https://www.facebook.com/nextsaimon",
              "https://www.instagram.com/nextsaimon/",
              "https://github.com/nextsaimon/",
            ],
          }),
        }}
      />
    </>
  );
}
