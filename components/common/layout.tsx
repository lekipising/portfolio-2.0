import React from "react";
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
  return (
    <section
      id={currentPage}
      className="min-w-screen h-max md:min-h-screen w-screen md:snap-start md:snap-always p-[5px] md:p-[30px]"
    >
      <section className="h-max md:pb-0 pb-16 w-full rounded-[8px] border-[1px] border-gray-200 bg-dark-200 relative">
        {/* nav */}
        <NavBar activeLink={currentPage} />
        {/* main start */}
        {children}
        {/* main end */}
        {/* footer */}
        {showFooter && <BottomBar />}
      </section>
    </section>
  );
}
