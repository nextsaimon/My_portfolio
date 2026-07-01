"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/button";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
    fetch(`${storageApi}/jsons/project_data.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch project data");
        return res.json();
      })
      .then((data) => {
        setProjectData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch project data:", err);
        setLoading(false);
      });
  }, []);

  const displayData = loading
    ? Array.from({ length: 6 }).map((_, i) => ({ name: `skeleton-${i}`, buttons: [] }))
    : projectData;

  return (
    <div id="projects" className="relative overflow-hidden flex flex-col py-8">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 max-w-5xl flex items-center gap-2 text-sm text-[var(--secondary-text-color)] font-medium mb-6">
        <Link href="/" className="hover:text-[var(--text-color)] hover:underline transition-colors duration-200">
          Home
        </Link>
        <span>/</span>
        <span className="text-[var(--text-color)] font-semibold">Projects</span>
      </div>

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
          {displayData.map((project, index) => {
            const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
            const imgSrc = project.img
              ? project.img.startsWith("http")
                ? project.img
                : `${storageApi}${project.img}`
              : null;
            return (
              <div className="w-full max-w-xs" key={project.name || index}>
                <Link href={loading ? "#" : `/project/${project.name}`} passHref>
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
                          <div className="w-full h-[300px] overflow-hidden relative">
                            {imgSrc && (
                              <Image
                                className="w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                src={imgSrc}
                                alt={project.title}
                                width={500} // Must specify width/height for string paths
                                height={300}
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
                                  className="border border-[var(--border-color)] px-2 py-1 font-bold text-[var(--text-color)] hover:text-[var(--secondary-text-color)] hover:bg-[var(--bg-color)] hover:shadow transition-all ease-in-out duration-300 rounded-full"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </AnimatedContent>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
