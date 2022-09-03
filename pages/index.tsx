import React from "react";

import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("../components/about"));
const MainLayout = dynamic(() => import("../components/common/layout"));
const ContactMe = dynamic(() => import("../components/contact"));
const FirstScreen = dynamic(() => import("../components/landing"));
const Projects = dynamic(() => import("../components/projects"));

export default function Home() {
  return (
    <main className="no-scrollbar min-w-screen h-auto w-screen md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
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
