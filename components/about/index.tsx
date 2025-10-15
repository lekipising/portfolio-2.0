import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";

export default function AboutMe({
  setIsVisible,
}: {
  setIsVisible: () => void;
}) {
  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);

  return (
    <motion.section
      id="_about-me"
      ref={observeRef}
      className="relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-max md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute -top-12 left-1/2 w-[90px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>
      <br />

      <p className="max-w-3xl !leading-loose transition-all duration-300 ease-in hover:text-white/70">
        I&apos;ve spent the last five years building software that people actually use.
        Started with code, evolved into architecture. I work mostly on the
        frontend with Next.js, TypeScript, Prisma, Tailwind. It&apos;s all about turning complex problems into interfaces
        that just make sense.
      </p>
      <br />
      <p className="max-w-3xl !leading-loose transition-all duration-300 ease-in hover:text-white/70">
        I work closely with product, design, and customers because good software isn&apos;t
        built in isolation. It&apos;s about understanding what needs to exist and why,
        then figuring out how to build it right.
      </p>
      <br />
      <p className="max-w-3xl !leading-loose transition-all duration-300 ease-in hover:text-white/70">
        When it comes to leading teams, I&apos;m in the trenches with everyone else.
        I believe in leading by example: writing code, reviewing PRs, unblocking problems.
        My goal is simple: help the team perform at their best while actually enjoying
        the work. That means inspiring when needed, mentoring, and always
        being present.
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        Tech Stack:
      </p>
      <div className="mt-2 space-y-6">
        <div>
          <h3 className="mb-0 text-sm font-medium text-white/70">Frontend:</h3>
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "Redux Toolkit",
              "Sass",
            ].map((skill, index, array) => (
              <span
                key={skill}
                className="text-sm text-yellow transition-all duration-300 ease-in hover:text-white/70"
              >
                {skill}
                {index !== array.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-0 text-sm font-medium text-white/70">
            Backend & Database:
          </h3>
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {["Node.js", "Nest.js", "Prisma ORM", "PostgreSQL", "MongoDB"].map(
              (skill, index, array) => (
                <span
                  key={skill}
                  className="text-sm text-yellow transition-all duration-300 ease-in hover:text-white/70"
                >
                  {skill}
                  {index !== array.length - 1 && ","}
                </span>
              ),
            )}
          </div>
        </div>
        <div>
          <h3 className="mb-0 text-sm font-medium text-white/70">
            Tools & Methodologies:
          </h3>
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {[
              "Git",
              "CI/CD",
              "Jest",
              "SEO",
              "Web Performance",
              "Agile/Scrum",
            ].map((skill, index, array) => (
              <span
                key={skill}
                className="text-sm text-yellow transition-all duration-300 ease-in hover:text-white/70"
              >
                {skill}
                {index !== array.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
