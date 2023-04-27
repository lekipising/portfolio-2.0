import React from "react";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      id="_about-me"
      className="relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-max  md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute left-1/2 -top-12 w-[90px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          About me
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
        As an experienced and creative frontend developer, I bring websites to{" "}
        <br />
        life with my expertise in the latest web technologies and a keen eye for{" "}
        <br />
        design. <br /> <br /> I can unlock the full potential of your digital
        presence, creating an <br />
        outstanding user experience that will take your business to the next
        level.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        If you are a business looking for a strong web product, recruiter
        looking to <br />
        hire or a developer looking for mentorship, feel free to contact me.
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I build awesome products using:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          TypeScript
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          React
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Next.js
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Tailwind CSS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Styled components
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
