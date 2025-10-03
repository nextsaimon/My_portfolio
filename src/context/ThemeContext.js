"use client";

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("auto");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "auto";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (theme === "auto") {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        prefersLight ? "light" : "dark"
      );
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "auto";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};