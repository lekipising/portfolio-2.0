import Link from "next/link";
import React from "react";

export default function NavBar({ activeLink }: { activeLink: string }) {
  return (
    <nav className="flex h-[55px] items-center border-b-[1px] border-gray-200 md:pl-8 pl-2 text-gray-100">
      <div className="md:w-[10vw]">
        <Link href="/">
          <a className="transition-all duration-150 ease-in hover:text-yellow">
            @lekipising
          </a>
        </Link>
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
    </nav>
  );
}

function OneNavItem({ text, isActive }: { text: string; isActive: boolean }) {
  const scrollIntoId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
