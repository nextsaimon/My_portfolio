import projectData from "@/project_data.json";

async function getProject(name) {
  if (!name) return null;
  return projectData.find((p) => p.name.toLowerCase() === name.toLowerCase());
}

export async function generateMetadata({ params }) {
  const { name } = await params;

  const project = await getProject(name);

  if (project) {
    return {
      title: project.title,
      icons: {
        icon: `/${project.img}`,
      },
    };
  }

  return {
    title: "Project Not Found",
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
