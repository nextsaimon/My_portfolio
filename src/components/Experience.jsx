"use client";
import { SiJavascript } from "react-icons/si";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import { SiAdobeillustrator } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import React from "react";
import { SiAdobephotoshop } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Experience = () => {
  const frontendSkills = [
    {
      name: "HTML",
      level: "Experienced",
      icon: <AiFillHtml5 />,
      class: "fa-brands fa-html5",
    },
    {
      name: "CSS",
      level: "Experienced",
      icon: <DiCss3 />,
      class: "fa-brands fa-css3",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: <SiJavascript />,
      class: "fa-brands fa-js",
    },
    {
      name: "React",
      level: "Intermediate",
      icon: <DiReact />,
      class: "fa-brands fa-react",
    },
    {
      name: "NextJS",
      level: "Intermediate",
      icon: <SiNextdotjs />,
      class: "fa-brands fa-react",
    },
    {
      name: "TailwindCSS",
      level: "Intermediate",
      icon: <SiTailwindcss />,
      class: "fa-brands fa-react",
    },
    {
      name: "Bootstrap",
      level: "Intermediate",
      icon: <BsFillBootstrapFill />,
      class: "fa-brands fa-bootstrap",
    },
    {
      name: "Git",
      level: "Intermediate",
      icon: <AiFillGithub />,
      class: "fa-solid fa-code-branch",
    },
  ];

  const otherSkills = [
    {
      name: "Python",
      level: "Intermediate",
      icon: <FaPython />,
      class: "fa-brands fa-python",
    },
    {
      name: "Photoshop",
      level: "Intermediate",
      icon: <SiAdobephotoshop />,
      class: "fa-regular fa-image",
    },
    {
      name: "Illustrator",
      level: "Intermediate",
      icon: <SiAdobeillustrator />,
      class: "fa-solid fa-bezier-curve",
    },
    {
      name: "Excel",
      level: "Experienced",
      icon: <RiFileExcel2Line />,
      class: "fa-solid fa-table",
    },
    {
      name: "Word",
      level: "Experienced",
      icon: <BsFillFileEarmarkWordFill />,
      class: "fa-regular fa-file-word",
    },
    {
      name: "PowerPoint",
      level: "Intermediate",
      icon: <FaRegFilePowerpoint />,
      class: "fa-solid fa-file-powerpoint",
    },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={index % 2 === 0 ? false : true}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={0.3}
        threshold={0.2}
        delay={0}
        key={index}
        Zindex={false}
      >
        <article className="flex justify-around w-40 gap-2">
          <i className={`${skill.class} icon`}>{skill.icon}</i>
          <div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        </article>
      </AnimatedContent>
    ));

  return (
    <section
      id="experience"
      style={{ overflow: "hidden" }}
      className="mb-10 lg:mb-0 lg:h-[100vh]"
    >
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
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <p className="section__text__p1 text-center">Explore My</p>
          <h1 className="title text-5xl text-center">Experience</h1>
        </FadeContent>
      </AnimatedContent>

      <div className="experience-details-container flex justify-center flex-col mt-8">
        <div className="about-containers flex flex-col lg:flex-row mx-6 gap-8 my-8 justify-center items-center">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="details-container mt-8 max-w-[600px] p-6 flex-1 bg-[var(--card-bg-color)] rounded-[var(--radius)] border-[0.1rem] border-[var(--border-color)] text-center">
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
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <h2 className="experience-sub-title text-[var(--secondary-text-color)] font-semibold text-[1.75rem] mb-8 text-xl">
                    Full-Stack Development
                  </h2>
                </FadeContent>
              </AnimatedContent>
              <div className="article-container flex justify-around text-left flex-wrap flex-row gap-10">
                {renderSkills(frontendSkills)}
              </div>
            </div>
          </FadeContent>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            {" "}
            <div className="details-container mt-8 max-w-[600px] p-6 flex-1 bg-[var(--card-bg-color)] rounded-[var(--radius)] border-[0.1rem] border-[var(--border-color)] text-center">
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
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <h2 className="experience-sub-title text-[var(--secondary-text-color)] font-semibold text-[1.75rem] mb-8 text-xl">
                    Other Skills
                  </h2>
                </FadeContent>
              </AnimatedContent>

              <div className="article-container flex justify-around text-left flex-wrap flex-row gap-10">
                {renderSkills(otherSkills)}
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default Experience;
