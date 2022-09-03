import React from "react";
import { scrollIntoId } from "./navbar";

export default function MobileMenu({
  setOpenMenu,
}: {
  setOpenMenu: () => void;
}) {
  return (
    <nav className="fixed inset-0 top-[55px] left-1/2 z-[60] h-full w-[97%] -translate-x-1/2 bg-[#011627]">
      <div
        role="link"
        onClick={() => {
          setOpenMenu();
          scrollIntoId("_hello");
        }}
        className={`flex h-[50px] cursor-pointer items-center border-[0.5px] border-gray-200  px-4  text-left transition-all duration-150 ease-in hover:text-yellow`}
      >
        _hello
      </div>
      <div
        role="link"
        onClick={() => {
          setOpenMenu();
          scrollIntoId("_about-me");
        }}
        className={`flex h-[50px] cursor-pointer items-center border-[0.5px] border-gray-200  px-4  text-left transition-all duration-150 ease-in hover:text-yellow`}
      >
        _about-me
      </div>
      <div
        role="link"
        onClick={() => {
          setOpenMenu();
          scrollIntoId("_projects");
        }}
        className={`flex h-[50px] cursor-pointer items-center border-[0.5px] border-gray-200  px-4  text-left transition-all duration-150 ease-in hover:text-yellow`}
      >
        _projects
      </div>
      <div
        role="link"
        onClick={() => {
          setOpenMenu();
          scrollIntoId("_contact-me");
        }}
        className={`flex h-[50px] cursor-pointer items-center border-[0.5px] border-gray-200  px-4  text-left transition-all duration-150 ease-in hover:text-yellow `}
      >
        _contact-me
      </div>
    </nav>
  );
}
