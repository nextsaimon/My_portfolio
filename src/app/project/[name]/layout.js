async function getProject(name) {
  if (!name) return null;
  try {
    const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
    const res = await fetch(`${storageApi}/jsons/project_data.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch project data");
    const projectData = await res.json();
    return projectData.find((p) => p.name.toLowerCase() === name.toLowerCase());
  } catch (error) {
    console.error("Error fetching project in layout:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const project = await getProject(name);

  if (project) {
    const storageApi = process.env.NEXT_PUBLIC_STORAGE_API;
    const imgUrl = project.img
      ? project.img.startsWith("http")
        ? project.img
        : `${storageApi}${project.img}`
      : null;

    return {
      title: project.title,
      description: project.description,
      icons: imgUrl
        ? {
          icon: imgUrl,
          apple: imgUrl,
        }
        : undefined,
    };
  }

  return {
    title: "Project Not Found",
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
