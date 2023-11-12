import React from "react";
import ContentWrapper from "./contentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  return (
    <div className=" md:mb-[7rem] mb-[4rem]">
      <ContentWrapper className="">
        <div className="mb-4 flex flex-col items-center">
          <div className="uppercase font-bold text-3xl ">Latest news</div>
          <div className="mt-3 text-center">
            There are many variations of passages of Lorem Ipsum
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-2">
          <div className="w-full md:flex-[0.1] h-[0.2rem] bg-primaryBlue"></div>
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className="md:flex-[0.1] w-full h-[0.2rem] bg-primaryBlue"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
        </div>
      </ContentWrapper>
    </div>
  );
};

export default LatestNews;
