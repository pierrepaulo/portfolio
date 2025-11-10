import Image from "next/image";

import type { Project } from "@/types/project";

import { Button } from "./button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techs, repoUrl, liveUrl, image } = project;

  return (
    <Card className="overflow-hidden border-white/5 bg-card/10 p-0 hover:border-primary/50 ">
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full justify-center md:w-2/5">
          <Image
            src={image}
            alt={`Prévia do projeto ${title}`}
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <CardContent className=" flex flex-1 flex-col gap-4 p-6">
          <div className="space-y-2">
            <h3 className="text-xl ">{title}</h3>
            <p className="text-sm text-foreground/70">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 ">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-card/60 px-3 py-1 text-xs font-medium text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            {repoUrl ? (
              <Button asChild variant="outline" className="border-primary">
                <a href={repoUrl} target="_blank" rel="noreferrer">
                  Ver código <Icon icon="mdi:github" />
                </a>
              </Button>
            ) : (
              <Button variant="outline" disabled>
                Ver código
              </Button>
            )}

            {liveUrl ? (
              <Button asChild>
                <a href={liveUrl} target="_blank" rel="noreferrer">
                  Ver demo <Icon icon="mdi:open-in-new" />
                </a>
              </Button>
            ) : (
              <Button disabled>Ver demo</Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
