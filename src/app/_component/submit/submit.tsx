"use client";
import Input from "./input";
import React, { useState } from "react";
import Image from "next/image";

const Submit = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setError] = useState<any>({});

  const onsubmit = () => {
    let err: any = {};
    if (name === "") err.name = "Please enter Your name.";
    if (phone === "") err.phone = "Please enter Phone number.";
    setError(err);
  };
  return (
    <div className="px-5 border-b-[1px] xl:px-[150px]" id="contact">
      <div className="flex flex-col md:px-[100px] md:flex-row justify-between">
        <div
          style={{ fontFamily: "NunitoSansSemibold" }}
          className="text-[50px] lg:text-[60px] xl:text-[80px] text-center textImage"
        >
          GET IN TOUCH
        </div>
        <div className="text-[13px] md:text-[9px] lg:text-[12px] xl:text-[16.5px] md:flex my-auto text-center md:text-left basis-1/4">
          Leave your name and phone number so we can contact you as soon as
          possible
        </div>
      </div>
      <div className="flex flex-col m-auto md:flex-row md:justify-between justify-center md:px-[100px] pt-[32px] pb-[50px] items-center ">
        <div className="flex flex-col gap-7 md:flex-row md:justify-between justify-center">
          <div className="flex" onClick={() => setError({})}>
            <Input
              type="text"
              placeholder="Yuliia"
              onChange={(e) => {
                setName(e.target?.value);
                setError({});
              }}
              error={errors?.name}
            >
              Your name
            </Input>
          </div>

          <div className="flex" onClick={() => setError({})}>
            <Input
              type="string"
              placeholder="+11 111 111 11 11"
              error={errors?.phone}
              onChange={(e) => {
                setPhone(e.target?.value);
              }}
            >
              Phone
            </Input>
          </div>
        </div>
        <div className="md:basis-1/4 pt-5 sm:pt-0">
          <Image
            src={submit ? "/image/submit2.svg" : "/image/submit1.svg"}
            alt="submitus"
            className="hover:cursor-pointer"
            width={165}
            height={55}
            onMouseEnter={() => setSubmit(true)}
            onMouseLeave={() => setSubmit(false)}
            onClick={onsubmit}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Submit;
