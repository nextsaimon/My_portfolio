"use client";
import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("auto");

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "auto";
    setTheme(storedTheme);
  }, []);

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    if (theme === "auto") {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      root.classList.add(prefersLight ? "light" : "dark");
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Cycle between light → dark → auto
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "auto";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
