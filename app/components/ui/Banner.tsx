import React from "react";
import ContentWrapper from "./contentWrapper";
import Image from "next/image";
import Button from "./Button";

interface BannerPropTypes {
  image: string;
  title: string;
  buttonText: string;
  onBtnClick: () => void;
  paragraph: string;
}

const Banner = ({
  image,
  title,
  buttonText,
  onBtnClick,
  paragraph,
}: BannerPropTypes) => {
  return (
    <div className="md:h-[40vh] bg-primaryBlue md:mb-[7rem] mb-[4rem] relative">
      <div
        style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
        className="md:h-[6rem] h-[5rem] w-[70%] md:w-[50%] bg-primaryGreen md:-top-10 -top-5 left-0 absolute"
      >
        <div className="flex items-center h-full ml-[2rem] md:ml-[15rem]">
          <div className="text-white md:text-4xl text-2xl font-bold uppercase">
            {title}
          </div>
        </div>
      </div>

      <ContentWrapper className="flex md:flex-row flex-col  justify-center h-full text-white ">
        <div className=" flex items-start flex-col justify-center">
          <div className="max-sm:mt-[6rem]">{paragraph}</div>
          <div className="mt-6 max-sm:mb-8">
            <Button className="bg-primaryGreen hover:bg-white hover:text-black ">
              {buttonText}
            </Button>
          </div>
        </div>
        <Image
          className="hidden md:flex"
          alt="students"
          src={image}
          width={1000}
          height={1000}
        />
      </ContentWrapper>
    </div>
  );
};

export default Banner;
