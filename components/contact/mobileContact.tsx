import Image from "next/image";
import React from "react";

import Link from "next/link";

import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

export default function MobileSocials() {
  return (
    <div className="absolute bottom-5 flex flex-col gap-2 md:hidden">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/lekipising"
        className="flex items-center text-center text-[15px] underline"
      >
        Check out more of my projects on GitHub
      </a>

      <p className="mt-16 w-full text-center underline">Connect with me on:</p>
      <div className="flex w-full justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/lekipising"
          className="flex h-full items-center justify-center px-4"
        >
          <Image
            src={Twitter}
            height="30"
            width="30"
            alt="Twitter"
            className="cursor-pointer"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/liplan0lekipising/"
          className="flex h-full items-center justify-center px-4"
        >
          <Image
            src={LinkedIn}
            height="30"
            width="30"
            alt="LinkedIn"
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
