"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgLaptop } from "react-icons/cg";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer text-2xl text-[color:var(--text-color)] border-[none]"
      style={{ marginLeft: "40%" }}
    >
      {theme === "light" ? (
        <FaMoon />
      ) : theme === "dark" ? (
        <CgLaptop />
      ) : (
        <FaSun />
      )}
    </button>
  );
};

export default ThemeToggleButton;
