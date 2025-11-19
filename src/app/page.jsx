import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Profile from "@/components/Profile";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
