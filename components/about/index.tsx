import React from "react";

export default function AboutMe() {
  return (
    <section className="cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:top-1/2 md:m-auto md:w-max md:-translate-y-[60%] md:rounded-[30px] md:p-16 md:text-[16px]">
      <span>/**</span>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * About me
      </p>
      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am an open-minded Software Engineer with a{" "}
      </p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * an interest of creating elegant tech solutions.
      </p>
      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am an open source enthusiast and enjoy playing video games.
      </p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I am a frontend developer and I am always looking for new challenges
        to solve.
      </p>
      <p>*</p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        * I build awesome products using:
      </p>
      <div className="flex w-full flex-wrap gap-1 gap-x-5">
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          * &#x2022; TypeScript
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          &#x2022; React
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          &#x2022; Next.js
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          * &#x2022; Tailwind CSS
        </p>
        <p className="transition-all duration-300 ease-in hover:text-white/70">
          &#x2022; Styled components
        </p>
      </div>
      <p>*</p>
      <span>*/</span>
    </section>
  );
}
