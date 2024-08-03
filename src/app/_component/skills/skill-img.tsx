import React from "react";
import Image from "next/image";

const Img = ({ hover }: { hover: boolean }) => {
  return (
    <div>
      <div className="pr-[24px] sm:flex hidden ">
        <Image
          src={hover ? "image/arrow.svg" : "image/arrow1.svg"}
          alt="arrow"
          width={25}
          height={25}
          priority
        />
      </div>
      <div className="pr-[24px] sm:hidden flex ">
        <Image
          src="image/arrow.svg"
          alt="arrow"
          width={25}
          height={25}
          priority
        />
      </div>
    </div>
  );
};

export default Img;
