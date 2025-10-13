"use client";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import about_img from "../../public/about-pic.jpg";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

// Function to calculate the age
const calculateAge = (birthDate) => {
  // const screenWidth = window.innerWidth;
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

// Function to calculate years of experience
const calculateExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

const About = () => {
  const age = calculateAge(new Date(2006, 8, 15)); // Calculate age (birthday: 15th September 2006)
  const experience = calculateExperience(2021) - 1; // Calculate years of experience since 2021

  return (
    <section id="about" style={{ overflow: "hidden" }}>
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
          <p className="section__text__p1 ">Get To Know More</p>
          <h1 className="title">About Me</h1>
        </FadeContent>
      </AnimatedContent>
      <div className="section-container justify-center">
        <div className="section__pic-container">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <Image
              className="about-pic"
              src={about_img}
              alt="Saimon's Profile"
              width={400}
              height={400}
              placeholder="blur"
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </FadeContent>
        </div>
        <div className="about-details-container items-center">
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
            <div className="about-containers mx-auto">
              <div className="details-container text-center flex flex-col">
                <i
                  className="fas fa-briefcase icon mx-auto "
                  style={{ margin: "auto" }}
                >
                  <FaBriefcase className="mx-auto" />
                </i>
                <h3>Experience</h3>
                <p>
                  {experience}+ years <br />
                  Full Stack Development <br /> Other skill+
                </p>
              </div>
              {/* <div className="details-container flex flex-col">
                <i
                  className="fas fa-graduation-cap icon"
                  style={{ margin: "auto" }}
                >
                  <FaGraduationCap className="mx-auto" />
                </i>
                <h3>Education</h3>
                <p>
                  SSC 2023
                  <br />
                  HSC 2025
                </p>
              </div> */}
            </div>
          </AnimatedContent>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="text-container">
              <p>It&apos;s me......</p>
              <h1> Saimon 🙋‍♂️</h1>
              <p>💻 A junior Full Stack developer. 🌐</p>
              <p>🧭 I live in Dhaka, Bangladesh.</p>
              {/* <p>
                ⌛ I am <b>{age}</b> years old.
              </p> */}
              <p>
                🤓 I am learning 🌐 Web Development, and I can also edit 📷
                photos, 📽️ videos, Word, Excel, etc.
              </p>
              <p>⚡ Fun fact: I started coding at 13!</p>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default About;
