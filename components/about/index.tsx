import React from "react";

export default function AboutMe() {
  return (
    <section className="cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:top-1/2 md:m-auto md:w-max md:-translate-y-[60%] md:rounded-[30px] md:p-16 md:text-[16px]">
      <span>/**</span>
      <p className="text-yellow transition-all duration-300 ease-in">
        * About me
      </p>

      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am an experienced Software Engineer with a interest of creating
        elegant tech solutions.
      </p>

      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am an open source enthusiast and enjoy playing video games.
      </p>
      <p>*</p>
      <p>*</p>
      <p className="text-sm transition-all duration-300 ease-in hover:text-white/70">
        * I build awesome products using:
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
      </div>
      <p>*</p>
      <span>*/</span>
    </section>
  );
}
