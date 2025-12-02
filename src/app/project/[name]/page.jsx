"use client";

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/button";
import { ThemeContext } from "@/context/ThemeContext";

import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "github-markdown-css/github-markdown-dark.css";
import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/github.css";

import projectData from "@/project_data.json";

const ProjectPage = () => {
  const { name } = useParams();
  const [project, setProject] = useState(null);
  const [renderedReadme, setRenderedReadme] = useState("");
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);
  const [effectiveTheme, setEffectiveTheme] = useState("light");

  marked.setOptions({
    highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
    langPrefix: "hljs language-",
  });

  useEffect(() => {
    if (theme === "auto") {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      setEffectiveTheme(prefersLight ? "light" : "dark");
    } else {
      setEffectiveTheme(theme === "dark" ? "dark" : "light");
    }

    if (name) {
      const foundProject = projectData.find((p) => p.name === name);
      if (foundProject) {
        setProject(foundProject);

        if (foundProject.readme) {
          fetch(foundProject.readme)
            .then((res) => res.text())
            .then((text) => {
              const html = DOMPurify.sanitize(marked.parse(text));
              setRenderedReadme(html);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Failed to fetch README:", error);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  }, [name, theme]);

  useEffect(() => {
    if (!renderedReadme) return;

    const blocks = document.querySelectorAll("pre > code");
    blocks.forEach((block) => {
      const wrapper = block.parentElement;
      wrapper.style.position = "relative";

      if (wrapper.querySelector(".copy-btn")) return;

      const btn = document.createElement("button");
      btn.innerText = "Copy";
      btn.className =
        "copy-btn absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded hover:bg-gray-700 transition";
      btn.onclick = () => {
        navigator.clipboard.writeText(block.textContent);
        btn.innerText = "Copied!";
        setTimeout(() => (btn.innerText = "Copy"), 1500);
      };
      wrapper.appendChild(btn);
    });
  }, [renderedReadme]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-0 md:mx-auto px-4 py-8 max-w-[1280px]">
      <div className="flex flex-col lg:flex-row gap-8 md:items-center lg:items-start">
        <div className="md:w-1/4 lg:sticky top-8">
          {project.img && (
            <div>
              <Image
                src={project.img}                   
                alt={project.title}
                className="rounded-lg shadow-lg w-full"
                width={1200}
                height={800}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                quality={100}
              />
              <div className="mt-4">
                <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
                <p className="text-[var(--secondary-text-color)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2">
                  {project.buttons?.map((btn, i) => (
                    <Button
                      key={i}
                      text={btn.name}
                      link={btn.link}
                      className={`px-4 py-2 text-sm font-semibold rounded-md w-full text-center transition-all duration-200 ${
                        btn.name === "GitHub"
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "border border-[var(--border-color)] hover:bg-[var(--border-color)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:w-3/4">
          {renderedReadme && (
            <div
              className={`markdown-body md:p-8 ${
                effectiveTheme === "dark"
                  ? "dark github-markdown-dark dark-markdown"
                  : "light github-markdown-light light-markdown"
              }`}
              dangerouslySetInnerHTML={{ __html: renderedReadme }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;