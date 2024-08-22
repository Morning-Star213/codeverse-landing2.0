import Link from "next/link";
import React from "react";

const Nav = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="fixed bg-[#3C3C3C] bg-opacity-75 text-center bottom-4 px-2 md:px-4 xl:w-[428] h-[54px] rounded-[12px] z-50">
      <div className="flex m-[14px]">
        <div className="text-[#959393] flex gap-3 text-[18px]">
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "home"
                ? "text-white border-b-2 pb-[11px]"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#home">Home</Link>
          </div>
          <div
            className={`hover:cursor-pointer  hover:text-white hover:scale-y-[1.01] ${
              activeSection === "skills"
                ? "text-white  border-b-2 pb-[11px]"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#skills">Skills</Link>
          </div>
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "portfolio"
                ? "text-white  border-b-2 pb-[11px]"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#portfolio">Portfolio</Link>
          </div>
          <div
            className={`hover:cursor-pointer hover:text-white hover:scale-y-[1.01] ${
              activeSection === "contact"
                ? "text-white  border-b-2 pb-[11px]"
                : "text-[#959393]"
            } transition delay-100`}
          >
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
