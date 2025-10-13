"use client";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  const iconClass =
    "text-[1.5rem] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125";

  return (
    <div
      id="socials-container"
      className="flex items-center gap-5 justify-center mt-2"
    >
      <Link
        href={process.env.NEXT_PUBLIC_FACEBOOK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook
          className={`${iconClass} hover:text-[#1877f2] icon`}
          aria-label="Facebook"
        />
      </Link>

      <Link
        href={process.env.NEXT_PUBLIC_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram
          className={`${iconClass} hover:text-[#e1306c] icon`}
          aria-label="Instagram"
        />
      </Link>

      <Link
        href={process.env.NEXT_PUBLIC_GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub
          className={`${iconClass} hover:text-[#333] icon`}
          aria-label="GitHub"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
