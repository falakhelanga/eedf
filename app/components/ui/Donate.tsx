import React from "react";
import ContentWrapper from "./contentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Donate = () => {
  return (
    <div>
      <ContentWrapper className="flex flex-col items-center md:mb-[7rem] mb-[4rem]">
        <div className="mb-4 flex flex-col items-center">
          <div className="uppercase font-bold text-3xl ">Lend a hand</div>
          <div className="mt-3 text-center">
            There are many variations of passages of Lorem Ipsum
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-2">
          <div className="w-full md:flex-[0.1] h-[0.2rem] bg-primaryBlue"></div>
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className="md:flex-[0.1] w-full h-[0.2rem] bg-primaryBlue"></div>
        </div>
        <div className="md:mt-[2rem] mt-[2rem] text-center">
          We&apos;re pleased to announce that we have partnered with backabuddy
          to launch a crowdfunding campaign with a mission to sponsor students
          in our bursary program. We humbly invite you to be part of the
          solution and contribute from as little as R20. Join us and
          #FundastudentngeR20
        </div>
        <div>
          <Button className="bg-primaryGreen hover:bg-white hover:text-black mt-10">
            Donate
          </Button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Donate;
