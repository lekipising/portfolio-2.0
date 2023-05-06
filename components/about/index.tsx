import React from "react";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      id="_about-me"
      className="hover:bg-dark-100/40 md:rounded-[30px] md:text-[16px] relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in md:relative md:m-auto md:mb-32  md:mt-0 md:w-max md:p-16"
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

      <p className="hover:text-white/70 transition-all duration-300 ease-in">
        I am creative frontend developer with 4 years of experience, I bring
        websites to <br />
        life with my expertise in the latest web technologies and a keen eye for{" "}
        <br />
        design. <br /> <br /> I can unlock the full potential of your digital
        presence, creating an <br />
        outstanding user experience that will take your business to the next
        level.
      </p>
      <br />
      <p></p>
      <p className="hover:text-white/70 transition-all duration-300 ease-in">
        If you&apos;re interested in discussing your project or learning more{" "}
        <br />
        about my experience, please don&apos;t hesitate to get in touch.
      </p>
      <br />
      <p className="hover:text-white/70 transition-all duration-300 ease-in">
        I build awesome products using:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk hover:text-white/70 text-yellow transition-all duration-300 ease-in">
          Next.js
        </p>
        <p className="asterisk hover:text-white/70 text-yellow transition-all duration-300 ease-in">
          React
        </p>
        <p className="asterisk hover:text-white/70 text-yellow transition-all duration-300 ease-in">
          TypeScript
        </p>
        <p className="asterisk hover:text-white/70 text-yellow transition-all duration-300 ease-in">
          Tailwind CSS
        </p>
        <p className="asterisk hover:text-white/70 text-yellow transition-all duration-300 ease-in">
          AWS
        </p>
        <p className="asterisk hover:text-white/70 text-yellow transition-all duration-300 ease-in">
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
