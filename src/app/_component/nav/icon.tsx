"use client";
import React, { useState } from "react";
import Image from "next/image";

const Icon = () => {
  const [cam, setCam] = useState<boolean>(false);
  const [f, setF] = useState<boolean>(false);
  const [m, setM] = useState<boolean>(false);
  return (
    <div className="flex md:gap-5 gap-3">
      <div onMouseEnter={() => setF(true)} onMouseLeave={() => setF(false)}>
        {f ? (
          <Image
            src="/image/whatsapp2.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={20}
            height={20}
            priority
          />
        ) : (
          <Image
            src="/image/whatsapp.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={20}
            height={20}
            priority
          />
        )}
      </div>
      <div onMouseEnter={() => setCam(true)} onMouseLeave={() => setCam(false)}>
        {cam ? (
          <Image
            src="/image/skype2.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={20}
            height={20}
            priority
          />
        ) : (
          <Image
            src="/image/skype.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={20}
            height={20}
            priority
          />
        )}
      </div>
      <div onMouseEnter={() => setM(true)} onMouseLeave={() => setM(false)}>
        {m ? (
          <Image
            src="/image/telegram2.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={20}
            height={20}
            priority
          />
        ) : (
          <Image
            src="/image/telegram.svg"
            alt="Logo"
            className="hover:cursor-pointer"
            width={20}
            height={20}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default Icon;
