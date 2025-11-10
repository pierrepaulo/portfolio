import { Icon } from "@iconify/react";
import { SectionContainer } from "../ui/section-container";
import { skillsIcons } from "@/data/skills-icons";

export const Skills = () => {
  return (
    <SectionContainer
      id="skills"
      label="SKILLS"
      title="Ferramentas e tecnologias que domino"
    >
      <div className="gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skillsIcons.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 rounded-2xl bg-card/80 px-4 py-3 font-semibold text-foreground shadow-(--shadow-xs) transition-all duration-200 hover:-translate-y-1 hover:border-primary"
          >
            <span className="flex size-6 items-center justify-center rounded-xl  ">
              <Icon icon={skill.icon} className="size-6" />
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
