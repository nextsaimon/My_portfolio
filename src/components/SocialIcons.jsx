import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

import React from "react";
const SocialIcons = () => {
  return (
    <div id="socials-container">
      <Link
        className="fab fa-facebook icon"
        href={process.env.NEXT_PUBLIC_FACEBOOK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook />
      </Link>
      <Link
        className="fab fa-instagram icon"
        href={process.env.NEXT_PUBLIC_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        className="fab fa-github icon"
        href={process.env.NEXT_PUBLIC_GITHUB}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </Link>
    </div>
  );
};

export default SocialIcons;
