import Image from "next/image";
import React from "react";
import Button from "./Button";

const LatestNewsCard = () => {
  return (
    <div className="bg-[#F6F6F6] flex  grid md:grid-cols-3 ">
      <div className="aspect-square h-full   overflow-hidden relative">
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
          src={"/images/students-sitting-down.jpg"}
        />
      </div>
      <div className="py-3 md:col-span-2 md:pl-8 pl-4  border-b-primaryGreen border-b-2">
        <div className="font-bold text-xl">Title</div>
        <div className="text-sm">
          There are many variations of sages of Lorem Ipsum available, but the
          mrity have suffered alteration in some orm, by injected humo ur,There
          many but the mri have suffered alteration in some
        </div>
        <div>
          <Button className="bg-primaryGreen hover:bg-white hover:text-black mt-10">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsCard;
