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
      className="min-w-screen h-max w-screen p-[5px] md:h-screen md:min-h-screen md:snap-start md:snap-always md:p-[30px]"
    >
      <section
        className={`relative min-h-[50vh] md:min-h-full ${
          currentPage === "_hello" && "min-h-[90vh]"
        } w-full rounded-[8px] border-[1px] border-gray-200 bg-dark-200 md:h-full`}
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
