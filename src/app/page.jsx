import ProfileCard from "@/components/ProfileCard";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const runtime = "edge";

async function getProjectData() {
  try {
    const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
    const res = await fetch(`${storageApi}/jsons/project_data.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch project data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching project data in Home:", error);
    return [];
  }
}

async function getSkillsData() {
  try {
    const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
    const res = await fetch(`${storageApi}/jsons/skills.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch skills data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching skills data in Home:", error);
    return [];
  }
}

async function getSocialData() {
  try {
    const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
    const res = await fetch(`${storageApi}/jsons/social_data.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch social data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching social data in Home:", error);
    return null;
  }
}

export default async function Home() {
  const [projectData, skillsData, socialData] = await Promise.all([
    getProjectData(),
    getSkillsData(),
    getSocialData(),
  ]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-12 py-8 min-h-screen">
      <ProfileCard socialData={socialData} />
      <main className="flex-1 space-y-6" id="about">
        <About />
        <Projects projectData={projectData} />
        <Skills skillsData={skillsData} />
      </main>
    </div>
  );
}
