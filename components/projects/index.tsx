import Image from "next/image";
import React, { useEffect, useState } from "react";
import { projects } from "./projects";

import { event } from "nextjs-google-analytics";

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

import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  return (
    <section className="m-auto flex max-w-[95%] flex-col justify-center gap-5 py-8 md:relative md:top-1/2 md:-translate-y-2/3 md:flex-row md:py-0 ">
      {projects.map((project, i) => (
        <OneProject key={i} index={i} project={project} />
      ))}
    </section>
  );
}

function OneProject({ project, index }: { project: Project; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // track project clicks
  useEffect(() => {
    // listen for clicks on the project
    const projectElement = document.getElementById(
      `project-${project.title.toLowerCase().replace(" ", "-")}`
    );
    projectElement?.addEventListener("click", () => {
      event("click-project", {
        category: "Project",
        label: project.title,
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{
        y: 0,
      }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
      className="group w-full md:w-[350px]"
      id={`project-${project.title.toLowerCase().replace(" ", "-")}`}
    >
      <h1 className="mb-3 text-[16px] font-bold text-purple-heavy group-hover:text-yellow">
        {project.title}
      </h1>
      <div className="project relative h-[58vh] max-h-[470px] rounded-[10px] border-[1px] border-gray-200 bg-dark-300 pt-0 pb-32 transition-all duration-300 ease-in">
        <motion.div
          initial={false}
          animate={
            imageLoaded
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative m-auto h-[20vh] max-h-[215px] w-full rounded-t-[10px] transition-all duration-150 ease-in group-hover:rounded-none"
        >
          <Image
            src={project.image}
            objectFit="cover"
            objectPosition="center"
            className="rounded-t-[10px]"
            layout="fill"
            alt={project.title}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </motion.div>
        <div className="p-8 px-4">
          <p className="mb-5 text-[15px] tracking-tight">
            {project.description}
          </p>
        </div>
        <div className="absolute left-4 bottom-4 flex flex-col gap-4">
          <a
            href={project.link}
            target="_blank"
            className="w-max rounded-[8px] bg-dark-100 px-4 py-2"
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
    </motion.div>
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
