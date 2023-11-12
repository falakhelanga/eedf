import React from "react";
import ContentWrapper from "./contentWrapper";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/student.jpg)`,
      }}
      className="h-[80vh] bg-center w-full bg-cover bg-norepeat overflow-hidden md:mb-[7rem] mb-[4rem] "
    >
      <div className="h-full  bg-[rgba(0,0,0,0.2)] flex">
        <div className="h-full md:flex-[0.4] md:flex hidden "></div>
        <div
          //   style={{
          //     clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
          //   }}
          className="bg-primaryGreen/70 h-full hero_clip_path  md:flex-[0.6] flex-1 max-sm:w-full flex items-center text-white"
        >
          <ContentWrapper className="  flex flex-col items-center">
            <div className="md:w-[70%] md:ml-[4rem]">
              <div className="font-bold md:text-6xl text-4xl">
                Empowering Futures Through Education
              </div>

              <div className="bg-white w-[70%] h-[0.3rem] mt-4"></div>
              <div className="mt-6">
                Dolor sit enim commodo incididunt fugiat nostrud do veniam amet
                culpa mollit magna in ad laboris aliquip magna ut sunt. Ullamco
                commodo incididunt aliquip duis fugiat anim dolore non tempor
                quis cillum eu. Quis cupidatat mollit dolore nulla dolor labore
                esse duis labore eu do enim dolor commodo id et.
              </div>
              <div className="mt-6">
                <Button className="bg-primaryBlue hover:bg-primaryGreen">
                  Join Now
                </Button>
              </div>
            </div>
          </ContentWrapper>
          {/* <div className="hidden md:flex">
            <div className="font-bold text-5xl ">
              Empowering Futures Through Education
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
