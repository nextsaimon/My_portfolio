import projectData from "@/project_data.json";

export async function generateMetadata({ params }) {
  const project = projectData.find((p) => p.name === params.name);

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
