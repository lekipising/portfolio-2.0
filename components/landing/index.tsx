import Image from "next/image";
import React, { useEffect, useRef } from "react";
import useIntersect from "../../utils/useIntersectionObserver";
import { scrollIntoId } from "../common/navbar";

export default function FirstScreen({
  setIsVisible,
}: {
  setIsVisible: () => void;
}) {
  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);

  return (
    <section
      id="_hello"
      ref={observeRef}
      className="relative flex h-auto flex-col items-center justify-start gap-32 pb-16 pt-16 md:h-full md:max-h-[1200px] md:flex-row md:justify-center md:pb-0 md:pt-0"
    >
      <div className="flex w-[90%] flex-col gap-6 md:w-auto">
        <div>
          <p className="text-[18px] font-medium text-white">Hi. I am</p>
          <h1
            id="title"
            className="title text-[48px] leading-tight tracking-tighter text-white md:text-[62px]"
          >
            Liplan Lekipising
          </h1>
          <p className="text-[21px] mt-2 md:mt-0 font-medium tracking-tight text-green md:text-[32px]">
            &gt; Senior Software Engineer
          </p>
        </div>
        <div className="flex flex-col gap-2 text-gray-100 md:gap-1">
          <p>
            Crafting exceptional user experiences from concept to deployment.{" "}
            <br />
            <br className="md:hidden" /> I specialize in the Next.js and React ecosystem, building
            products <br />
            that users love and teams are proud of.
          </p>
          {/* some quick action buttons/links here - view my work - takes to projects, Get in touch - takes to contact, Download Resume - takes to resume */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row">
            <button
              onClick={() => scrollIntoId("_projects")}
              className={`flex cursor-pointer items-center justify-center rounded-br-xl rounded-tl-xl border-[0.5px] border-gray-200 px-4 py-2 font-medium text-gray-100 shadow transition-all duration-150 ease-in hover:border-green/10 hover:text-green/70`}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollIntoId("_contact-me")}
              className={`flex cursor-pointer items-center justify-center rounded-br-xl rounded-tl-xl border-[0.5px] border-gray-200 px-4 py-2 font-medium text-gray-100 shadow transition-all duration-150 ease-in hover:border-green/10 hover:text-green/70`}
            >
              Get in Touch
            </button>
            <a
              href="/Lekipising-Liplan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex cursor-pointer items-center justify-center rounded-br-xl rounded-tl-xl border-[0.5px] border-gray-200 px-4 py-2 font-medium text-gray-100 shadow transition-all duration-150 ease-in hover:border-green/10 hover:text-green/70`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="pic-shadow relative z-50 hidden h-[25vw] w-[25vw] overflow-hidden rounded-full outline outline-green md:block">
        <Image
          src={
            "https://res.cloudinary.com/dpnbddror/image/upload/c_scale,f_auto,h_800/v1697208403/liplan/v4_x34zg3.jpg"
          }
          height="300"
          width="300"
          quality={100}
          priority={true}
          alt="Liplan Lekipising - Portfolio"
          className="rounded-full bg-left object-left transition-all duration-300 ease-in hover:scale-[1.025]"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute right-[20vw] top-[10vh] z-40 h-[20vw] w-[20vw]" />
    </section>
  );
}
