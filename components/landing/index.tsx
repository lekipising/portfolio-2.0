import Image from "next/image";
import React from "react";

export default function FirstScreen() {
  return (
    <section className="relative flex h-full items-center justify-center gap-32">
      <div className="flex flex-col gap-16">
        <div>
          <p className="text-[18px] font-medium text-white">Hi all. I am</p>
          <h1 className="text-[62px] text-white">Liplan Lekipising</h1>
          <h2 className="text-[32px] font-medium text-purple-light">
            &gt; Front-end developer
          </h2>
        </div>
        <div className="italic text-gray-100">
          <p>
            // I craft interactive and beautiful web apps, and I love what I do.
          </p>
          <p>// View some of my personal projects!</p>
        </div>
      </div>
      <div className="relative h-[25vw] w-[25vw] rounded-full z-50">
        <Image
          src={
            "https://res.cloudinary.com/dpnbddror/image/upload/v1642927649/liplan/liplan_img_ftb9xn.webp"
          }
          height="300"
          width="300"
          layout="responsive"
          alt="Liplan Lekipising - Portfolio"
          className="rounded-full"
        />
      </div>
      {/* background blur */}
      <div className="bg-blur-one absolute top-[10vh] right-[20vw] z-40 h-[20vw] w-[20vw]" />
      <div className="bg-blur-two absolute right-0 top-[30vh] z-40 h-[25vw] w-[25vw]" />
    </section>
  );
}
