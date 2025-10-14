"use client";
import React from "react";
import SocialIcons from "./SocialIcons";
import profile_img from "../../public/profile-pic.jpg";
import Image from "next/image";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Profile = () => {
  const handleNavClick = (targetId) => {
    // Scroll to target element after a short delay
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <section
      id="profile"
      className="flex flex-col items-center xl:flex-row xl:justify-center xl:gap-20 relative h-[calc(100vh-80px)]"
      style={{ overflow: "hidden" }}
    >
      <div className="">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <Image
              className="profile-pic w-[300px] lg:w-[450px]"
              src={profile_img}
              alt="Saimon's Profile"
              // width={450} // Default width
              // height={450} // Default height
              placeholder="blur" // Blur effect while loading
              quality={100}
              style={{ objectFit: "cover", borderRadius: "50%" }} // Optional: rounded shape
            />
          </FadeContent>
        </AnimatedContent>
      </div>

      <div className="section__text self-center text-center">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <p className="section__text__p1 font-bold text-center ">
            Hello, I&apos;m
          </p>
        </AnimatedContent>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="title text-5xl text-center">Saimon</h1>
        </FadeContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <p className="section__text__p2  text-[1.75rem] mb-4 font-black">
            Full Stack Developer
          </p>
        </AnimatedContent>
        <div className="btn-container flex justify-center gap-4 relative z-[1]">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={0.3}
            threshold={0.2}
            delay={0}
          >
            <button
              className="btn btn-color-1 font-bold bg-[var(--btn-1-bg)] text-[var(--btn-1-text-color)] hover:bg-[var(--btn-1-bg-hover)] hover:cursor-pointer border-[0.1rem] border-[var(--border-color)] transition-all duration-300 ease-[ease] w-36 p-2 lg:p-3 rounded-[var(--radius)]"
              id="btn1"
              onClick={() => handleNavClick("about")}
            >
              About Me
            </button>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={0.3}
            threshold={0.2}
            delay={0}
          >
            <button
              className="btn btn-color-2 font-bold bg-[var(--btn-2-bg)] text-[var(--btn-2-text)] hover:bg-[var(--btn-2-bg-hover)] hover:cursor-pointer border-[0.1rem] border-[var(--border-color)] transition-all duration-300 ease-[ease] w-36 p-2 lg:p-3 rounded-[var(--radius)]"
              id="btn2"
              onClick={() => handleNavClick("contact")}
            >
              Contact Info
            </button>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.3}
          threshold={0.2}
          delay={0}
        >
          <div className="mt-5">
            <SocialIcons />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Profile;
