"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (targetId) => {
    if (targetId === "project") {
      if (pathname === "/project") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/project");
      }
    } else {
      if (pathname !== "/") {
        router.push(`/#${targetId}`);
      } else {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  // Close menu on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    const handleScroll = () => isMenuOpen && setIsMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={navRef}
      className="relative z-10 select-none font-['BBH_Sans_Bogle']"
    >
      {/* Desktop Navbar */}
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
          <nav className="hidden lg:flex justify-around items-center h-[17vh]">
            <div
              className="cursor-pointer text-5xl tracking-widest font-medium text-[var(--text-color)]"
              onClick={() => router.push("/")}
            >
              SAIMON
            </div>

            <ul className="flex gap-8 text-2xl list-none">
              {["Home", "about", "experience", "project", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      className="navLink"
                      onClick={() => handleNavClick(item.toLowerCase())}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                )
              )}
              <li>
                <ThemeToggleButton />
              </li>
            </ul>
          </nav>
        </FadeContent>
      </AnimatedContent>

      {/* Mobile Navbar */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
      >
        <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
          <nav className="flex lg:hidden justify-between items-center h-[17vh] px-6">
            <div
              className="cursor-pointer text-5xl tracking-widest font-medium text-[var(--text-color)]"
              onClick={() => handleNavClick("Home")}
            >
              SAIMON
            </div>

            <div className="relative inline-block">
              {/* Hamburger Icon */}
              <div
                className="relative w-8 h-6 cursor-pointer transition-all duration-300"
                onClick={toggleMenu}
              >
                <span
                  className={`absolute left-0 block h-[3px] w-full rounded-full bg-[color:var(--hamburger-color)] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 block h-[3px] w-full rounded-full bg-[color:var(--hamburger-color)] transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "opacity-0 top-1/2 -translate-y-1/2"
                      : "top-1/2 -translate-y-1/2"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 block h-[3px] w-full rounded-full bg-[color:var(--hamburger-color)] transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "-rotate-45 top-1/2 -translate-y-1/2"
                      : "bottom-0"
                  }`}
                ></span>
              </div>

              {/* Dropdown Menu */}
              <ul
                className={`absolute p-1.5 border-[var(--border-color)] border-4 right-0 top-full bg-[color:var(--bg-color)] w-fit rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                {["Home", "about", "experience", "project", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        className="navLink block text-center text-2xl py-2.5 w-full"
                        onClick={() => handleNavClick(item.toLowerCase())}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </button>
                    </li>
                  )
                )}
                <li className="flex py-2 justify-center">
                  <ThemeToggleButton />
                </li>
              </ul>
            </div>
          </nav>
        </FadeContent>
      </AnimatedContent>
    </div>
  );
};

export default Navbar;
