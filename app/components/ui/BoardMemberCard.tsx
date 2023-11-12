import Image from "next/image";
import React from "react";

export interface BoardMemberCardPropTypes {
  image: string;
  paragraph: string;
  name: string;
  position: string;
}

const BoardMemberCard = ({
  image,
  paragraph,
  name,
  position,
}: BoardMemberCardPropTypes) => {
  return (
    <div className="bg-[#F6F6F6] px-8 pb-8">
      <div className="flex justify-center w-full -mt-[2rem]">
        <div className="aspect-square w-full overflow-hidden relative">
          <Image
            // className="100%"
            // layout="fill"
            // objectFit="cover"
            objectPosition="top"
            fill={true}
            objectFit="cover"
            // height={100}
            // width={300}
            alt="student"
            src={image}
          />
        </div>
      </div>

      <div className="mt-6 capitalize text-xl font-bold ">{name}</div>
      <div className="capitalize font-bold text-sm">{position}</div>

      <div className="mt-4">{paragraph}</div>
    </div>
  );
};

export default BoardMemberCard;
