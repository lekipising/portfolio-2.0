import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import FirstScreen from "../components/landing";
import MainLayout from "../components/common/layout";
import NavBar from "../components/common/navbar";
import BottomBar from "../components/common/bottombar";

const AboutMe = dynamic(() => import("../components/about"));
const ContactMe = dynamic(() => import("../components/contact"));
const Projects = dynamic(() => import("../components/projects"));

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

  return (
    <main className="no-scrollbar m-auto mt-[5vh] h-[90vh] w-[90vw] overflow-y-scroll rounded-[8px] border-[1px] border-gray-200 bg-dark-200 transition-all duration-300 ease-in">
      <div
        id="spotlight"
        className="bg-blur-two fixed left-0 top-0 z-40 h-[50px] w-[50px] rounded-full"
      />
      <div className="fixed inset-x-0 z-[100] hidden px-[5vw] md:block">
        <NavBar activeLink={"_hello"} />
      </div>
      <FirstScreen />
      <AboutMe />
      <Projects />
      <ContactMe />
      <BottomBar />
      {/* <MainLayout currentPage="_hello"></MainLayout> */}
    </main>
  );
}
