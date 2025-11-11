import projectData from "@/project_data.json";

export async function generateMetadata({ params }) {
  // Find the project data based on the URL parameter
  const project = projectData.find((p) => p.name === params.name);

  if (project) {
    return {
      title: project.title,
      icons: {
        icon: `/${project.img}`, // The path to your image in the public folder
      },
    };
  }

  // Optionally, return a default title and icon if the project is not found
  return {
    title: "Project Not Found",
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
