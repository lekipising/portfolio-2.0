import React from "react";
import AboutMe from "../components/about";
import MainLayout from "../components/common/layout";
import ContactMe from "../components/contact";
import FirstScreen from "../components/landing";
import Projects from "../components/projects";

export default function Home() {
  return (
    <main className="md:no-scrollbar md:h-screen h-auto w-screen min-w-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
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
