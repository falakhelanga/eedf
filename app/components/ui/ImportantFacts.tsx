import React from "react";
import ContentWrapper from "./contentWrapper";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fact, { FactPropTypes } from "./Fact";

const facts: FactPropTypes[] = [
  {
    text: "Students",
    numbers: "20+",
  },
  {
    text: "Mentors",
    numbers: "30+",
  },
  {
    text: "Schools",
    numbers: "5+",
  },
];

const ImportantFacts = () => {
  return (
    <div className=" py-16 bg-cover bg-norepeat text-white bg-[url(/images/important-fact-bg.jpeg)] md:mb-[7rem] mb-[4rem]">
      <ContentWrapper className="flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center">
          <div className="uppercase font-bold text-3xl ">Important facts</div>
          <div className="mt-3 text-center">
            There are many variations of passages of Lorem Ipsum
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-2">
          <div className="w-full md:flex-[0.1] h-[0.2rem] bg-white"></div>
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className="md:flex-[0.1] w-full h-[0.2rem] bg-white"></div>
        </div>
        <div className="flex md:flex-row flex-col max-sm:gap-8 justify-between w-full mt-[5rem]">
          {facts.map((fact) => (
            <Fact key={fact.text} {...fact} />
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ImportantFacts;
