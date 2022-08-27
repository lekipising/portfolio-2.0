import React from "react";
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
      className="min-w-screen h-screen min-h-screen w-screen snap-start snap-always md:p-[30px] p-[5px]"
    >
      <section className="h-full w-full rounded-[8px] border-[1px] border-gray-200 bg-dark-200">
        {/* nav */}
        <NavBar activeLink={currentPage} />
        {/* main start */}
        {children}
        {/* main end */}
        {/* footer */}
        {showFooter && <footer></footer>}
      </section>
    </section>
  );
}
