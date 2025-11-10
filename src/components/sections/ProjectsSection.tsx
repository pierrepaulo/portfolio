import { projectsData } from "@/data/projects";

import { ProjectCard } from "../ui/project-card";
import { SectionContainer } from "../ui/section-container";

export const ProjectsSection = () => {
  return (
    <SectionContainer
      id="projects"
      label="projetos"
      title="Projetos em destaque"
    >
      <div className="space-y-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};
