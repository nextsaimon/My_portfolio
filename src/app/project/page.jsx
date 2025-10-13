"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "@/components/button";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

// import project image
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
    <div id="projects" className="overflow-hidden flex flex-col">
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
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
        </FadeContent>
      </AnimatedContent>

      <div className="container" style={{ margin: "auto" }}>
        <div
          className="flex justify-center flex-wrap gap-3 w-full max-w-5xl relative"
          style={{ margin: "auto", padding: "5px" }}
        >
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
                <div className="card shadow w-full">
                  {/* Skeleton Loader */}
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="bg-gray-300 h-[180px] w-full rounded-md"></div>
                      <div className="p-3 space-y-2" style={{ margin: "5px" }}>
                        <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto"></div>
                        <div
                          className="flex justify-center gap-2 mt-3"
                          style={{ margin: "5px" }}
                        >
                          <div className="h-8 w-[100px] bg-gray-300 rounded-full"></div>
                          <div className="h-8 w-[100px] bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="img overflow-hidden">
                        {project.img && (
                          <Image
                            className="card-img-top hover:scale-105 transition-all ease-in-out duration-300"
                            src={project.img}
                            alt={project.title}
                            width={500}
                            height={300}
                            placeholder="blur"
                            quality={100}
                          />
                        )}
                      </div>
                      <div className="card-body text-center mt-2">
                        <h4 className="card-title text-[23px]">
                          {project.title}
                        </h4>
                        <div className="flex justify-center gap-2 flex-wrap">
                          {project.buttons?.map((btn, i) => (
                            <Button
                              key={i}
                              text={btn.name}
                              link={btn.link}
                              className="border-[1px] px-2 py-1 w-[100px] hover:text-white hover:bg-gray-900 hover:shadow transition-all ease-in-out duration-300"
                              style={{ borderRadius: 50 }}
                            />
                          ))}
                        </div>
                      </div>
                    </>
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
