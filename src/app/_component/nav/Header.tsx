import React from "react";
import Image from "next/image";
import Nav from "./nav";
import Icon from "./icon";
import Link from "next/link";

const Header = ({ activeSection }: { activeSection: string }) => {
  return (
    <div>
      <div className="w-full px-[24px] pt-[59px] lg:pt-[60px] lg:px-[71px] lg:h-[100px] h-[80px] z-50 flex justify-between">
        <div className="flex my-auto">
          <Link href="/#home">
            <Image
              src="codeverse.svg"
              alt="Logo"
              className="hover:cursor-pointer"
              width={117}
              height={41}
              priority
            />
          </Link>
        </div>
        <div className=" flex my-auto">
          <Icon />
        </div>
      </div>
      <div className="flex justify-center">
        <Nav activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Header;
