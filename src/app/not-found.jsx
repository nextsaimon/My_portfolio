"use client";
import Link from "next/link";
import DecryptedText from "@/styles/DecryptedText/DecryptedText";

export default function Custom404() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900">
      <div className="relative z-20 w-full max-w-2xl p-8 mx-4 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-3xl text-center md:mx-0 h-auto md:h-[350px] flex flex-col justify-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-indigo-600 dark:text-indigo-400 m-0">
          404
        </h1>
        <div className="mt-4">
          <DecryptedText
            text="Oops! This page doesn't exist."
            speed={30}
            maxIterations={150}
            revealDirection="center"
            characters="!@#$%^&*()"
            animateOn="view"
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            parentClassName="relative"
            sequential={true}
          />
        </div>
        <div className="mt-4">
          <DecryptedText
            text="The page might have been removed or you may have typed the wrong URL."
            speed={30}
            maxIterations={150}
            revealDirection="center"
            characters="!@#$%^&*()"
            animateOn="view"
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            parentClassName="relative"
            sequential={true}
          />
        </div>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 text-white font-semibold bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
