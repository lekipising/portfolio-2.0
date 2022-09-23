import React, { useEffect } from "react";

import dynamic from "next/dynamic";
import FirstScreen from "../components/landing";
import MainLayout from "../components/common/layout";

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

  // used as a hack around chrome's laggy snap scroll
  useEffect(() => {
    // listen for mouse wheel up or down and disable scroll
    document.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const masterSlider = document.querySelector(
          "#master-slide"
        ) as HTMLElement;
        if (e?.deltaY < 0) {
          // scroll up
          console.log("scroll up");
          // scroll up to next section - full page scroll

          if (masterSlider) {
            masterSlider.scrollBy({
              top: -window.innerHeight,
              behavior: "smooth",
            });
          }
        } else {
          // scroll down
          console.log("scroll down");
          // scroll down to next section - full page scroll
          if (masterSlider) {
            masterSlider.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }
        }
      },
      { passive: false }
    );
  }, []);

  return (
    <main
      id="master-slide"
      className="no-scrollbar min-w-screen max-w-screen md:snap-parent h-auto w-screen overflow-x-hidden scroll-smooth transition-all duration-300 ease-in md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll"
    >
      <div
        id="spotlight"
        className="bg-blur-two fixed left-0 top-0 z-40 h-[50px] w-[50px] rounded-full"
      />
      <MainLayout currentPage="_hello">
        <FirstScreen />
      </MainLayout>
      <MainLayout showFooter currentPage="_about-me">
        <AboutMe />
      </MainLayout>
      <MainLayout showFooter currentPage="_projects">
        <Projects />
      </MainLayout>
      <MainLayout showFooter currentPage="_contact-me">
        <ContactMe />
      </MainLayout>
    </main>
  );
}
