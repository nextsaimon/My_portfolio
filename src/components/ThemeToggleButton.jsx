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
      className="theme-toggle-button"
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
