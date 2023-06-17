import Image from "next/image";
import React, { useState } from "react";
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

import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  return (
    <section
      id="_projects"
      className="relative m-auto mb-32 mt-20 flex max-w-[95%] flex-col justify-center gap-12 py-8 pb-[10rem] md:relative md:mt-0 md:flex-row md:gap-5  md:py-32 md:pb-[10rem]"
    >
      <div className="absolute -top-8 left-1/2 w-full -translate-x-1/2 text-center md:top-12 md:w-[510px] md:text-left">
        <motion.h2 className="heading-gradient mx-auto text-lg font-semibold text-white">
          Adventures in Development: <br className="block md:hidden" /> My
          Personal Projects
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>

      {projects.map((project, i) => (
        <OneProject key={i} index={i} project={project} />
      ))}

      <div className="absolute bottom-0 flex w-full flex-col items-center justify-center gap-6">
        <div className="flex w-full flex-col items-center justify-center gap-3 text-center font-medium">
          <p>Download my resume to view my professional experience and more</p>
          <a
            id="download-resume"
            href="/Lekipising-Liplan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn btn-4"
          >
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function OneProject({ project, index }: { project: Project; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{
        y: 0,
      }}
      viewport={{ amount: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
      className="group w-full md:w-[350px]"
      id={`project-${project.title.toLowerCase().replace(" ", "-")}`}
    >
      <h3 className="mb-3 text-[16px] font-bold text-gray-100 group-hover:text-yellow/70">
        {project.title}
      </h3>
      <div className="project relative h-[58vh] max-h-[430px] rounded-[10px] border-[1px] border-gray-200 bg-dark-300 pb-32 pt-0 transition-all duration-300 ease-in">
        <motion.div
          initial={false}
          animate={
            imageLoaded
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative m-auto h-[20vh] max-h-[215px] w-full rounded-t-[10px] transition-all duration-150 ease-in group-hover:rounded-none"
        >
          <Image
            src={project.image}
            className="rounded-t-[10px]"
            alt={project.title}
            onLoadingComplete={() => setImageLoaded(true)}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </motion.div>
        <div className="p-8 px-4 pt-4">
          <p className="mb-5 text-[14px] font-medium tracking-tight xl:text-[14px]">
            {project.description}
          </p>
        </div>
        <div className="absolute bottom-4 left-4 flex flex-col gap-4">
          <a
            href={project.link}
            target="_blank"
            className="w-max rounded-[8px] border bg-dark-100 px-4 py-2 text-sm transition-all duration-300 ease-in hover:border hover:border-yellow"
            rel="noreferrer"
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
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <span className="text-[13px] text-white xl:text-[10px]">{tech.text}</span>
    </div>
  );
}
