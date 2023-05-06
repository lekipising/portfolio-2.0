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
      className="relative m-auto mb-32 mt-20 flex max-w-[95%] flex-col justify-center gap-12 py-8 md:relative md:mt-0 md:flex-row md:gap-5  md:py-32 "
    >
      <div className="md:w-[510px] absolute -top-8 left-1/2 w-full -translate-x-1/2 text-center md:top-12 md:text-left">
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

      <div className="bottom-0 w-full text-center md:absolute">
        <h4 className="font-semibold tracking-tight">
          Professional Experience
        </h4>
        <div className="mt-4 flex items-center justify-center gap-4">
          <OneExperience link="https://knackapp.com" text="KnackApp" />
          <OneExperience
            link="https://staging-tzw.vercel.app"
            text="Tranzactwith"
          />
          <OneExperience link="https://staging.navu360.com" text="Navu360" />
        </div>
      </div>
    </section>
  );
}

function OneExperience({ link, text }: { link: string; text: string }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 text-purple-heavy hover:text-yellow"
      rel="noopener noreferrer"
    >
      <span className="tracking-tight">{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </a>
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
      className="md:w-[350px] group w-full"
      id={`project-${project.title.toLowerCase().replace(" ", "-")}`}
    >
      <h3 className="group-hover:text-yellow/70 mb-3 text-[16px] font-bold text-gray-100">
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
          <p className="xl:text-[14px] mb-5 text-[14px] font-medium tracking-tight">
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
      <span className="xl:text-[10px] text-[13px] text-white">{tech.text}</span>
    </div>
  );
}
