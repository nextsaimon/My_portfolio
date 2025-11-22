"use client";

import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiAppwrite,
  SiFirebase,
  SiCloudflare,
  SiVercel,
  SiNodedotjs,
} from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaPython, FaLock } from "react-icons/fa";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Experience = () => {
  const techStack = [
    { name: "NextJS", icon: <SiNextdotjs className="text-black" /> },
    { name: "React", icon: <DiReact className="text-[#61DAFB]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "NodeJS", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "GitHub", icon: <SiGithub className="text-[#000000]" /> },
    { name: "Appwrite", icon: <SiAppwrite className="text-[#F02E65]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: "BetterAuth", icon: <FaLock className="text-gray-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-[#F38020]" /> },
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
          <div
            className="text-5xl md:text-6xl mb-4"
          >
            {skill.icon}
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
