import React, { useEffect, useState } from "react";
import BottomBar from "./bottombar";
import NavBar from "./navbar";

export default function MainLayout({
  showFooter,
  currentPage,
  children,
}: {
  showFooter?: boolean;
  children: React.ReactNode;
  currentPage: string;
}) {
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile === null) return null;

  return (
    <section
      id={currentPage}
      className="min-w-screen h-screen w-screen overflow-y-auto bg-red-500 p-[5px] md:p-[30px]"
    >
      <section
        className={`relative w-full rounded-[8px] border-[1px] border-gray-200 bg-dark-200 `}
      >
        {/* nav */}
        {!isMobile && <NavBar activeLink={currentPage} />}
        {/* main start */}
        {children}
        {/* main end */}
        {/* footer */}
        {showFooter && !isMobile && <BottomBar />}
      </section>
    </section>
  );
}
