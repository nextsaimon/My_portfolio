"use client";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import AnimatedContent from "@/context/AnimatedContent/AnimatedContent";
import FadeContent from "@/context/FadeContent/FadeContent";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center flex-col"
      style={{ overflow: "hidden" }}
    >
      <AnimatedContent
        distance={150}
        direction="vertical" // Fixed typo: "vartical" → "vertical"
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
          <p className="section__text__p1 text-center">Get in Touch</p>
          <h1 className="title text-5xl text-center">Contact Me</h1>
        </FadeContent>
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
        Zindex={false}
      >
        <div className="contact-info-upper-container flex justify-center rounded-[var(--radius)] border-[0.1rem] border-[var(--border-color)] bg-[var(--card-bg-color)] my-8 mx-auto p-2 max-w-[350px]">
          <div className="contact-info-container flex items-center justify-center gap-2 m-4">
            <i className="fas fa-envelope icon contact-icon email-icon">
              <MdEmail />
            </i>
            <h2>
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </Link>
            </h2>
          </div>
        </div>
      </AnimatedContent>

      <div className="contact-info-container flex items-center justify-center z-50">
        <ContactForm />
      </div>
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
        Zindex={false}
      >
        <div className="contact-info-upper-container flex justify-center rounded-[var(--radius)] border-[0.1rem] border-[var(--border-color)] bg-[var(--card-bg-color)] my-8 mx-auto p-2 max-w-[350px]">
          <div className="contact-info-container flex items-center justify-center gap-2 m-4">
            <i className="fab fa-facebook icon contact-icon">
              <BsFacebook />
            </i>
            <h2>
              <Link
                href={process.env.NEXT_PUBLIC_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </h2>{" "}
            <b>||</b>
            <i className="fab fa-instagram icon contact-icon">
              <AiOutlineInstagram />
            </i>
            <h2>
              <Link
                href={process.env.NEXT_PUBLIC_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </h2>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Contact;
