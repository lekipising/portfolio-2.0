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
      className="relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-max  md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute -top-12 left-1/2 w-[315px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          From Code to Coffee: About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>
      <br />

      <p className="transition-all duration-300 ease-in hover:text-white/70">
        4 years of experience have shaped me into a frontend wizard,{" "}
        <br className="hidden md:block" />
        but I&apos;m more than that - I&apos;m a versatile engineer experienced{" "}
        <br className="hidden md:block" />
        in backend, DevOps, and cloud computing.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        If you seek transformative solutions, consulting, or mentorship,{" "}
        <br className="hidden md:block" />
        let&apos;s connect!
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I build awesome products using:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Next.js
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          React
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          TypeScript
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Tailwind CSS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          AWS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          GraphQL
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-xs">Others:</span>
        <p className="flex gap-1 text-xs text-gray-100">
          <span className="text-yellow">Git</span>
          &#x2022;
          <span className="text-yellow">Redux Toolkit</span>
          &#x2022;
          <span className="text-yellow">Java</span>
          &#x2022;
          <span className="text-yellow">Python</span>
        </p>
      </div>
    </motion.section>
  );
}
