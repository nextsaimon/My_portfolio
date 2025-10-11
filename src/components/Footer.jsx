"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

const Footer = () => {
  const router = useRouter();

  const handleFooterClick = (targetId) => {
    if (router.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    router.push("/project");
  };

  return (
    <footer
      id="Footer"
      className="overflow-hidden select-none text-center py-6"
    >
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
            <ul className="nav-links flex justify-center gap-6 flex-wrap select-none">
              <li className="cursor-pointer">
                <a onClick={() => handleFooterClick("Home")}>Home</a>
              </li>
              <li className="cursor-pointer">
                <a onClick={() => handleFooterClick("about")}>About</a>
              </li>
              <li className="cursor-pointer">
                <a onClick={() => handleFooterClick("experience")}>
                  Experience
                </a>
              </li>
              <li className="cursor-pointer">
                <a onClick={handleProjectClick}>Project</a>
              </li>
              <li className="cursor-pointer">
                <a onClick={() => handleFooterClick("contact")}>Contact</a>
              </li>
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
