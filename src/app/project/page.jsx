"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "@/components/button";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

// import project images
import project1 from "@/../public/project-1.png";
import project2 from "@/../public/project-2.png";
import project3 from "@/../public/project-3.png";
import project4 from "@/../public/project-4.png";
import project5 from "@/../public/project-5.png";
import project6 from "@/../public/project-6.png";

const Project = () => {
  const [loading, setLoading] = useState(true);

  // simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "AOS Helper",
      img: project1,
      buttons: [
        { name: "GitHub", link: "https://github.com/nextSaimon/AOS-Helper" },
        {
          name: "Marketplace",
          link: "https://marketplace.visualstudio.com/items?itemName=nextsaimon.aos-helper",
        },
      ],
    },
    {
      title: "Password Combinator",
      img: project2,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/nextSaimon/password-combinator",
        },
      ],
    },
    {
      title: "Minecraft Colab Server",
      img: project3,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/nextSaimon/minecraft-colab-server",
        },
        {
          name: "Colab",
          link: "https://colab.research.google.com/github/nextSaimon/minecraft-colab-server/blob/main/Minecraft_hosting.ipynb",
        },
      ],
    },
    {
      title: "Gmail to Telegram Bot",
      img: project4,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/nextSaimon/Gmail-to-Telegram-Bot",
        },
      ],
    },
    {
      title: "Notes-Viewer",
      img: project5,
      buttons: [
        { name: "GitHub", link: "https://github.com/nextSaimon/Notes-Viewer" },
      ],
    },
    {
      title: "Auto Wifi Changer",
      img: project6,
      buttons: [
        {
          name: "GitHub",
          link: "https://github.com/nextSaimon/Auto_Wifi_Changer",
        },
      ],
    },
  ];

  return (
    <div id="projects" className="relative overflow-hidden flex flex-col">
      {/* Section header */}
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
          <p className="section__text__p1 text-center">Browse My Recent</p>
          <h1 className="title text-5xl text-center">Projects</h1>
        </FadeContent>
      </AnimatedContent>

      <div className="container mx-auto mt-4">
        <div className="flex justify-center flex-wrap gap-3 w-full max-w-5xl relative mx-auto p-1">
          {projects.map((project, index) => (
            <div className="w-full max-w-xs" key={index}>
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
                {/* Card */}
                <div className="card shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 w-full bg-[var(--card-bg-color)] rounded-2xl h-[400px] overflow-hidden group">
                  {/* Skeleton loader */}
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="bg-[var(--bg-color)] h-[180px] w-full rounded-t-2xl"></div>
                      <div className="p-3 space-y-2 m-1">
                        <div className="h-5 bg-[var(--bg-color)] rounded w-2/3 mx-auto"></div>
                        <div className="flex justify-center gap-2 mt-3 m-1">
                          <div className="h-8 w-[100px] bg-[var(--bg-color)] rounded-full"></div>
                          <div className="h-8 w-[100px] bg-[var(--bg-color)] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* Project image */}
                      <div className="w-full h-[300px] overflow-hidden">
                        {project.img && (
                          <Image
                            className="w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            src={project.img}
                            alt={project.title}
                            placeholder="blur"
                            quality={100}
                          />
                        )}
                      </div>

                      {/* Card body */}
                      <div className="card-body text-center mt-2">
                        <h4 className="card-title text-[23px] text-[var(--text-color)]">
                          {project.title}
                        </h4>
                        <div className="flex justify-center gap-2 flex-wrap">
                          {project.buttons?.map((btn, i) => (
                            <Button
                              key={i}
                              text={btn.name}
                              link={btn.link}
                              className="border border-[var(--border-color)] px-2 py-1 w-[100px] text-[var(--text-color)] hover:text-[var(--secondary-text-color)] hover:bg-[var(--bg-color)] hover:shadow transition-all ease-in-out duration-300 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedContent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
