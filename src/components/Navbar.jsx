"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  useEffect(() => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.style.zIndex = isMenuOpen ? "-1" : "0";
    }
  }, [isMenuOpen]);

  const handleNavClick = (targetId) => {
    if (router.pathname !== "/") router.push("/");
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <div
      id="Home"
      ref={navRef}
      className=" relative z-10 select-none font-['BBH_Sans_Bogle'] "
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
          <nav
            id="desktop-nav"
            className="hidden lg:flex justify-around items-center h-[17vh]"
          >
            <div
              className="cursor-pointer text-[2rem] select-none"
              onClick={() => handleNavClick("Home")}
            >
              <div className="text-5xl tracking-widest font-medium text-[var(--text-color)]">
                SAIMON
              </div>
            </div>

            <ul className="flex gap-8 text-2xl list-none cursor-pointer">
              <li>
                <a className="navLink" onClick={() => handleNavClick("Home")}>
                  Home
                </a>
              </li>
              <li>
                <a className="navLink" onClick={() => handleNavClick("about")}>
                  About
                </a>
              </li>
              <li>
                <a
                  className="navLink"
                  onClick={() => handleNavClick("experience")}
                >
                  Experience
                </a>
              </li>
              <li>
                <Link href="/project" className="navLink" onClick={toggleMenu}>
                  Project
                </Link>
              </li>
              <li>
                <a
                  className="navLink"
                  onClick={() => handleNavClick("contact")}
                >
                  Contact
                </a>
              </li>
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
          <nav
            id="hamburger-nav"
            className="flex lg:hidden justify-between items-center h-[17vh] px-6"
          >
            <div
              className="cursor-pointer text-[2rem] select-none"
              onClick={() => handleNavClick("Home")}
            >
              <div className="text-5xl tracking-widest font-medium  text-[var(--text-color)]">
                SAIMON
              </div>
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
                <li>
                  <a
                    className="navLink block text-center text-2xl py-2.5"
                    onClick={() => handleNavClick("Home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="navLink block text-center text-2xl py-2.5"
                    onClick={() => handleNavClick("about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="navLink block text-center text-2xl py-2.5"
                    onClick={() => handleNavClick("experience")}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <Link
                    href="/project"
                    className="navLink block text-center text-2xl py-2.5"
                    onClick={toggleMenu}
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <a
                    className="navLink block text-center text-2xl py-2.5"
                    onClick={() => handleNavClick("contact")}
                  >
                    Contact
                  </a>
                </li>
                <li className="flex py-2">
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
