import React from "react";
import Image from "next/image";

const Img = ({ hover }: { hover: boolean }) => {
  return (
    <div className="pr-[24px] flex">
      <Image
        src={hover ? "image/arrow.svg" : "image/arrow1.svg"}
        alt="arrow"
        width={25}
        height={25}
        priority
      />
    </div>
  );
};

export default Img;
