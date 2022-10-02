import React from "react";

export const scrollIntoId = (id: string) => {
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

      <a
        key={activeLink}
        href="/Lekipising_Resume_Oct.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-8 flex w-max items-center justify-center rounded-full border-[2px] border-white py-2 px-4 font-medium text-white transition-all duration-150 ease-in hover:border-yellow hover:text-yellow"
      >
        View resume
      </a>
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
