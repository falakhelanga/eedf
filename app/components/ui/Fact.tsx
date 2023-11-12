import React from "react";

export interface FactPropTypes {
  text: string;
  numbers: string;
}

const Fact = ({ text, numbers }: FactPropTypes) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <div className="capitalize font-bold text-2xl">{text}</div>
        <div className="md:w-[90%] w-[30%] h-[0.2rem] bg-white"></div>
      </div>
      <div className="font-bold text-5xl mt-4">{numbers}</div>
    </div>
  );
};

export default Fact;
