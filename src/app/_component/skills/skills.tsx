"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Img from "./skill-img";

const Skills = ({
  id,
  setActiveSection,
}: {
  id: string;
  setActiveSection: (id: string) => void;
}) => {
  const [back, setBack] = useState<boolean>(false);
  const [front, setFront] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);

  useEffect(() => {
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  }, [id, setActiveSection]);

  return (
    <div
      className=" flex justify-end pt-[120px] sm:pt-[84px] md:[100px] lg:pt-[114px] flex-col"
      id={id}
    >
      <div className="pb-[60px] sm:pb-[10px] md:pb-[20px] lg:pb-[30px] xl:pl-[145px] lg:pl-[75px] md:pl-[60px] sm:pl-[30px] pl-0 text-[25px] md:text-[31.11px]">
        / SKILLS
      </div>
      <div className="grid">
        <div className="absolute right-0 flex justify-end px-0 mx-0">
          <Image
            src="/image/circle2.svg"
            className=" max-w-[100%] h-auto px-0 mx-0"
            alt="portfolio"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="xl:pl-[190px] lg:pl-[110px] md:pl-[90px] sm:pl-[50px] pl-5">
        <div className="flex sm:pt-5 pr-[40px] pt-5">
          <div className="sm:flex sm:my-auto sm:pt-0 pt-2">
            <Img hover={back} />
          </div>
          <div
            className="border-gray-400 border-b-2 w-[93%] flex flex-col sm:flex-row justify-between hover:border-gray-600 text-white  transition delay-100 hover:scale-[1.001] "
            onMouseEnter={() => setBack(true)}
            onMouseLeave={() => setBack(false)}
          >
            <div className="text-[23px] sm:h-[100px] md:text-[21.11px] lg:text-[25.11px] xl:text-[31.11px] flex items-center">
              Back-end
            </div>
            <div
              className={`${
                back ? "pb-[15px]" : `sm:hidden  pb-[15px]`
              } lg:basis-2/3 sm:flex items-center sm:basis-2/3 sm:justify-between `}
            >
              <div className="text-[9px] lg:text-[10px] xl:text-[13px]">
                Our back-end expertise spans Python frameworks like Django,
                Flask, and FastAPI, as well as Node.js with Express and NestJS,
                PHP with CodeIgniter, Laravel, and CakePHP, and C# with ASP.NET.
                This diverse range of capabilities allows us to tackle complex
                server-side challenges and deliver robust, scalable, and secure
                applications.
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:pt-5 pr-[40px] pt-5">
          <div className="sm:flex sm:my-auto  sm:pt-0 pt-2">
            <Img hover={front} />
          </div>
          <div
            className="border-gray-400 border-b-2 w-[93%] flex flex-col sm:flex-row  justify-between hover:border-gray-600 text-white hover:scale-[1.001] transition delay-100 "
            onMouseEnter={() => setFront(true)}
            onMouseLeave={() => setFront(false)}
          >
            <div className="text-[23px] sm:h-[100px] md:text-[21.11px] lg:text-[25.11px] xl:text-[31.11px] flex items-center">
              Front-end
            </div>
            <div
              className={`${
                front ? "pb-[15px]" : "sm:hidden pb-[15px]"
              } lg:basis-2/3 sm:flex items-center   sm:basis-2/3 sm:justify-between `}
            >
              <div className="">
                <div className="text-[9px] lg:text-[10px] xl:text-[13px]">
                  In the front-end domain, we excel in building dynamic and
                  responsive user interfaces using popular frameworks such as
                  React, Angular, and Vue. Our front-end developers are adept at
                  crafting visually appealing and intuitive web experiences that
                  engage users and drive business success.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:pt-5 pr-[40px] pt-5">
          <div className="sm:flex sm:my-auto  sm:pt-0 pt-2">
            <Img hover={block} />
          </div>
          <div
            className="border-gray-400 border-b-2 w-[93%] flex flex-col sm:flex-row  justify-between hover:border-gray-600 text-white hover:scale-[1.001] transition delay-100 "
            onMouseEnter={() => setBlock(true)}
            onMouseLeave={() => setBlock(false)}
          >
            <div className="text-[23px] sm:h-[100px] md:text-[21.11px] lg:text-[25.11px] xl:text-[31.11px] flex items-center">
              Block chain
            </div>
            <div
              className={`${
                block ? "pb-[15px]" : "sm:hidden pb-[15px]"
              } lg:basis-2/3 sm:flex items-center   sm:basis-2/3 sm:justify-between  `}
            >
              <div className="">
                <div className="text-[9px] lg:text-[10px] xl:text-[13px]">
                  Recognizing the growing importance of blockchain technology,
                  Codeverse Technologies also offers specialized services in
                  this domain. Our experts are well-versed in developing smart
                  contracts, working with the Solana blockchain, and leveraging
                  Solidity to create innovative decentralized applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
