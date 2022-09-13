import React from "react";

import dynamic from "next/dynamic";
import FirstScreen from "../components/landing";
import MainLayout from "../components/common/layout";

const AboutMe = dynamic(() => import("../components/about"));
const ContactMe = dynamic(() => import("../components/contact"));
const Projects = dynamic(() => import("../components/projects"));

export default function Home() {
  return (
    <main className="no-scrollbar min-w-screen max-w-screen overflow-x-hidden h-auto w-screen md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll transition-all ease-in duration-300">
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
