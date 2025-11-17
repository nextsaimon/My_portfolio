import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: "Saimon – Portfolio",
  description:
    "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming. Explore my projects and learn more about my work.",
  keywords:
    "Saimon, web developer, software developer, front-end development, full-stack development, programming, coding, portfolio, web projects, JavaScript, React, HTML, CSS, NextJs, TailwindCSS, Bootstrap, responsive design, developer portfolio, UHSC, UHSCIAN",

  metadataBase: new URL("https://nextsaimon.com"),

  alternates: {
    canonical: "https://nextsaimon.com",
  },

  openGraph: {
    title: "Saimon – Portfolio",
    description:
      "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming.",
    url: "https://nextsaimon.com/",
    siteName: "Saimon's Portfolio",
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
    title: "Saimon – Portfolio",
    description:
      "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming.",
    images: ["https://nextsaimon.com/profile-pic.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "cvta9GHpsvTp2V2Vt8uFH3zrccVxxKvDzwI68IesufE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <NextTopLoader />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
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
      </body>
    </html>
  );
}
