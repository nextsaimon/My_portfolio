"use client";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import AnimatedContent from "@/styles/AnimatedContent/AnimatedContent";
import FadeContent from "@/styles/FadeContent/FadeContent";

const Contact = () => {
  return (
    <section id="contact" style={{ overflow: "hidden" }}>
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
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
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
        <div className="contact-info-upper-container max-w-[350px]">
          <div className="contact-info-container">
            <i className="fas fa-envelope icon contact-icon email-icon">
              <MdEmail />
            </i>
            <p>
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </Link>
            </p>
          </div>
        </div>
      </AnimatedContent>

      <div className="contact-info-container z-50">
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
        <div className="contact-info-upper-container max-w-[350px]">
          <div className="contact-info-container">
            <i className="fab fa-facebook icon contact-icon">
              <BsFacebook />
            </i>
            <p>
              <Link
                href={process.env.NEXT_PUBLIC_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </p>{" "}
            <b>||</b>
            <i className="fab fa-instagram icon contact-icon">
              <AiOutlineInstagram />
            </i>
            <p>
              <Link
                href={process.env.NEXT_PUBLIC_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </p>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Contact;
