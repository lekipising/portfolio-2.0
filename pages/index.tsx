import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import FirstScreen from "../components/landing";
import NavBar from "../components/common/navbar";

const AboutMe = dynamic(() => import("../components/about"));
const ContactMe = dynamic(() => import("../components/contact"));
const Projects = dynamic(() => import("../components/projects"));
const BottomBar = dynamic(() => import("../components/common/bottombar"));

import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  // use for spolight following cursor
  useEffect(() => {
    const spotlightEl = document.querySelector("#spotlight") as HTMLElement;

    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      if (spotlightEl) {
        // change position of spotlight - using translate - place it in the center of the cursor - use % to make it responsive
        spotlightEl.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    // remove event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const carouselRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: carouselRef });

  const yRange: any = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentPrecent, setCurrentPercent] = useState(null);

  useEffect(
    () =>
      yRange.onChange(() => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );

  return (
    <>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <main
        ref={carouselRef}
        className="no-scrollbar relative z-20 m-auto mt-[2vh] h-[95vh] w-[95vw] overflow-y-scroll rounded-[8px] border-[1px] border-gray-200 bg-dark-200 transition-all duration-300 ease-in md:mt-[5vh] md:h-[90vh] md:w-[90vw]"
      >
        <div
          id="spotlight"
          className="bg-blur-two fixed left-0 top-0 z-40 h-[40px] w-[40px] rounded-full"
        />
        <div className="fixed inset-x-0 z-[100] hidden px-[5vw] md:block">
          <NavBar />
        </div>
        <FirstScreen />
        <AboutMe />
        <Projects />
        <ContactMe />
        <BottomBar />
        <div
          style={{ height: currentPrecent - 10 + "%" }}
          className={`heading-gradient-underline fixed inset-y-[5vh] right-[5vw] z-[100] m-auto hidden h-1 min-h-[5px] w-[5px] rounded-br-lg rounded-tr-lg md:block`}
        />
      </main>
    </>
  );
}

// make static with getStaticProps
export async function getStaticProps() {
  return {
    props: {},
  };
}
