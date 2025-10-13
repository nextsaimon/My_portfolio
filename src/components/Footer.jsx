"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Footer = () => {
  const router = useRouter();

  const links = [
    { name: "Home", id: "Home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Project", action: () => router.push("/project") },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (link) => {
    if (link.action) return link.action();
    if (router.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="overflow-hidden select-none text-center py-6 font-['BBH_Sans_Bogle']">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <FadeContent
          blur={true}
          duration={900}
          easing="ease-out"
          initialOpacity={0}
        >
          <nav>
            <ul className="nav-links flex flex-col lg:flex-row justify-center gap-6 flex-wrap select-none">
              {links.map((link) => (
                <li key={link.name} className="cursor-pointer">
                  <a className="navLink" onClick={() => handleClick(link)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </FadeContent>
      </AnimatedContent>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 select-none">
        &#169; {new Date().getFullYear()} Saimon. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
