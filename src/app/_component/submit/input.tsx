import React, { ReactNode } from "react";
type OnChang = (value: any) => void;

const Input = ({
  type,
  placeholder,
  children,
  error,
  onChange,
}: {
  type: string;
  placeholder: string;
  error: string;
  children: ReactNode;
  onChange: OnChang;
}) => {
  return (
    <div className=" relative lg:w-[270px] w-[100%]">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e: any) => onChange(e.target?.value)}
        className={`${
          error ? "border-rose-500" : "border-gray-400"
        } rounded-md bg-black bg-opacity-0  md:w-[100%] pl-[41px] border-2 h-[52px] text-[15px] lg:h-[44px]`}
      />
      {/* <span className="text-rose-500 text-[12px]">{error}</span> */}
      <div className="text-[11px] bg-[#2E2E2E] w-[80px] pl-3 absolute top-[-9px] left-[29px]">
        {children}
      </div>
    </div>
  );
};

export default Input;
