import "@/styles/css/style.css";
import "@/styles/css/mediaqueries.css";
import "@/styles/css/contact-form.css";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Saimon",
  description:
    "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming. Explore my projects and learn more about my work.",
  keywords:
    "Saimon, web developer, software developer, front-end development, full-stack development, programming, coding, portfolio, web projects, JavaScript, React, HTML, CSS, JavaScript, NextJs, React, TailwindCSS, Bootstrap, responsive design, developer portfolio, UHSC, UHSCIAN",
  openGraph: {
    title: "Saimon",
    description:
      "Welcome to Saimon's portfolio! Discover my skills in web development, design, and programming.",
    url: "https://nextsaimon.com/",
    siteName: "Saimon's Portfolio",
    images: [
      {
        url: "profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Saimon's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
