import Image from "next/image";
import React from "react";

const scrollIntoId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function NavBar({ activeLink }: { activeLink: string }) {
  return (
    <nav className="relative flex h-[55px] items-center border-b-[1px] border-gray-200 pl-2 text-gray-100 md:pl-8">
      <div className="md:w-[10vw]">
        <div
          role="link"
          onClick={() => scrollIntoId("_hello")}
          className="cursor-pointer transition-all duration-150 ease-in hover:text-yellow"
        >
          @lekipising
        </div>
      </div>
      <div className="hidden h-full items-center md:flex">
        <OneNavItem text="_hello" isActive={activeLink === "_hello"} />
        <OneNavItem text="_about-me" isActive={activeLink === "_about-me"} />
        <OneNavItem text="_projects" isActive={activeLink === "_projects"} />
        <OneNavItem
          text="_contact-me"
          isActive={activeLink === "_contact-me"}
        />
      </div>
      {activeLink !== "_hello" && (
        <div className="absolute right-8 h-[40px] w-[40px] rounded-full">
          <Image
            src={
              "https://res.cloudinary.com/dpnbddror/image/upload/v1642927649/liplan/liplan_img_ftb9xn.webp"
            }
            height="100"
            width="100"
            layout="responsive"
            alt="Liplan Lekipising - Portfolio"
            className="rounded-full"
          />
        </div>
      )}
    </nav>
  );
}

function OneNavItem({ text, isActive }: { text: string; isActive: boolean }) {
  return (
    <div
      role="link"
      onClick={() => scrollIntoId(text)}
      className={`flex h-full cursor-pointer items-center justify-center border-[0.5px]  border-gray-200  px-4 transition-all duration-150 ease-in hover:text-yellow ${
        isActive && "border-b-[2px] border-b-yellow"
      }`}
    >
      {text}
    </div>
  );
}
