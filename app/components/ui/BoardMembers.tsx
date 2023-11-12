import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ContentWrapper from "./contentWrapper";
import BoardMemberCard, { BoardMemberCardPropTypes } from "./BoardMemberCard";

const members: BoardMemberCardPropTypes[] = [
  {
    name: "Tsebo Mphutho",
    position: "CEO",
    paragraph: `There are many variations of sages of Lorem Ipsum available, but the
        mrity have suffered alteration in some orm, by injected humo ur,There many but the mri have suffered alteration in some`,
    image: "/images/tsebo.jpeg",
  },
  {
    name: "Yolokazi rono",
    position: "Vice president",
    paragraph: `There are many variations of sages of Lorem Ipsum available, but the
        mrity have suffered alteration in some orm, by injected humo ur,There many but the mri have suffered alteration in some`,
    image: "/images/rono.jpeg",
  },
  {
    name: "Bryan Sangz",
    position: "Managing director",
    paragraph: `There are many variations of sages of Lorem Ipsum available, but the
        mrity have suffered alteration in some orm, by injected humo ur,There many but the mri have suffered alteration in some`,
    image: "/images/bryan.jpeg",
  },
];

const BoardMembers = () => {
  return (
    <div className="md:mb-[7rem] mb-[4rem]">
      <ContentWrapper className="flex justify-center w-full flex-col items-center">
        <div className="mb-4 flex flex-col items-center">
          <div className="uppercase font-bold text-3xl ">Board members</div>
          <div className="mt-3 text-center">
            There are many variations of passages of Lorem Ipsum
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-2">
          <div className="w-full md:flex-[0.1] h-[0.2rem] bg-primaryBlue"></div>
          <FontAwesomeIcon icon={faGraduationCap} />
          <div className="md:flex-[0.1] w-full h-[0.2rem] bg-primaryBlue"></div>
        </div>
        <div className="flex flex-col md:flex-row max-sm:gap-[4rem]  gap-6 md:mt-[8rem] mt-[5rem]">
          {members.map((member) => (
            <BoardMemberCard key={member.name} {...member} />
          ))}
          {/* <BoardMemberCard />
          <BoardMemberCard /> */}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BoardMembers;
