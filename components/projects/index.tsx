import Image from "next/image";
import React from "react";
import { projects } from "./projects";

export interface Technology {
  svg: string;
  text: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  link: string;
  image: string;
}

export default function Projects() {
  return (
    <section className="relative top-1/2 m-auto flex max-w-[95%] -translate-y-2/3 justify-center gap-5 ">
      {projects.map((project, i) => (
        <OneProject key={i} project={project} />
      ))}
    </section>
  );
}

function OneProject({ project }: { project: Project }) {
  return (
    <div className="group w-[350px]">
      <h1 className="mb-3 text-[16px] font-bold text-purple-heavy">
        {project.title}
      </h1>
      <div className="project relative rounded-[10px] max-h-[470px] h-[58vh] border-[1px] border-gray-200 bg-dark-300 pt-0 pb-32 transition-all duration-300 ease-in">
        <div className="relative m-auto max-h-[215px] h-[20vh] w-full rounded-t-[15px] transition-all duration-150 ease-in group-hover:rounded-none">
          <Image
            src={project.image}
            objectFit="cover"
            objectPosition="center"
            className="rounded-t-[10px]"
            layout="fill"
            alt={project.title}
          />
        </div>
        <div className="p-8 px-4">
          <p className="mb-5 text-[15px]">{project.description}</p>
        </div>
        <div className="absolute left-4 bottom-4 flex flex-col gap-4">
          <a
            href={project.link}
            className="rounded-[8px] bg-dark-100 px-4 py-2 w-max"
          >
            View project
          </a>

          <div className="flex gap-3">
            {project.technologies.map((tech, i) => (
              <OneTechnology key={i} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OneTechnology({ tech }: { tech: Technology }) {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={tech.svg}
        height="20"
        width="20"
        quality={100}
        alt={tech.text}
      />
      <span className="text-[13px] text-white">{tech.text}</span>
    </div>
  );
}
