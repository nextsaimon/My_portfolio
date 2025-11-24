"use client";

import React from "react";
import Image from "next/image";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Experience = () => {
  const techStack = [
    { name: "NextJS", src: "/icons/nextjs.svg" },
    { name: "React", src: "/icons/react.svg" },
    { name: "Tailwind", src: "/icons/tailwind.svg" },
    { name: "NodeJS", src: "/icons/node-js.svg" },
    { name: "Python", src: "/icons/python.svg" },
    { name: "MongoDB", src: "/icons/mongodb.svg" },
    { name: "GitHub", src: "/icons/github.svg" },
    { name: "Appwrite", src: "/icons/appwrite.svg" },
    { name: "Firebase", src: "/icons/google-firebase.svg" },
    { name: "BetterAuth", src: "/icons/better-auth.svg" },
    { name: "Vercel", src: "/icons/vercel.svg" },
    { name: "Cloudflare", src: "/icons/cloudflare.svg" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <AnimatedContent
        key={index}
        distance={50}
        direction="bottom"
        delay={index * 0.05}
        duration={0.5}
        ease="ease-out"
        initialOpacity={0}
        scale={0.8}
        threshold={0.1}
      >
        {/* Skill Card */}
        <div className="relative flex flex-col items-center justify-center p-4 h-36 w-36 md:h-40 md:w-40 rounded-2xl bg-[var(--card-bg-color)] border border-[var(--border-color)] shadow-sm ">
          <div className="mb-4">
            <Image
              src={skill.src}
              alt={`${skill.name} Icon`}
              width={64}
              height={64}
              className="w-14 h-14 md:w-16 md:h-16 object-contain select-none"
            />
          </div>

          {/* Skill Name */}
          <h3 className="text-sm font-semibold text-[var(--secondary-text-color)] tracking-wide transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      </AnimatedContent>
    ));

  return (
    <section
      id="experience"
      className="py-20 min-h-[80vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={true}
        duration={1}
        ease="ease-out"
        initialOpacity={0}
      >
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="text-center mb-16">
            <p className="text-lg font-medium text-[var(--secondary-text-color)] mb-2">
              My Tools & Technologies
            </p>
            <h1 className="text-5xl font-bold">Skills</h1>
          </div>
        </FadeContent>
      </AnimatedContent>

      <div className="w-full max-w-[1100px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {renderSkills(techStack)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
