import Image from "next/image";
import Link from "next/link";
import React from "react";

import Twitter from "../../assets/twitter.svg";

export default function BottomBar() {
  return (
    <footer className="absolute inset-x-0 bottom-0 flex h-[55px] items-center justify-between border-t-[1px] border-gray-200 px-8 pl-2 text-gray-100 md:pl-8">
      <div className="flex h-full items-center">
        <span className="pr-2">find me in:</span>
        <a
          href="https://github.com/lekipising"
          className="flex h-full items-center justify-center border-l-[1px] border-l-gray-200 px-4"
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
          href="https://github.com/lekipising"
          className="flex h-full items-center justify-center border-x-[1px] border-x-gray-200 px-4"
        >
          <Image
            src={Twitter}
            height="30"
            width="30"
            alt="Twitter"
            className="cursor-pointer"
          />
        </a>
      </div>

      <a
        href="https://github.com/lekipising"
        className="flex h-full cursor-pointer items-center gap-2 border-x-[1px] border-x-gray-200 px-4"
      >
        <span className="cursor-pointer">@lekipising</span>
        <Image
          src={Twitter}
          height="30"
          width="30"
          alt="Twitter"
          className="cursor-pointer"
        />
      </a>
    </footer>
  );
}
