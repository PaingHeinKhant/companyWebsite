import React from "react";
// import beebyte from "https://unsplash.com/photos/5MlBMYDsGBY";
import { FiMail } from "react-icons/fi";
import SectionDivider from "./SectionDivider";

const HeroSection = () => {
  return (
    <div className="pt-[100px] ">
      <div className="grid  grid-cols-12  items-center my-14 2xl:my-36 ">
        <div className="col-span-4 ">
          <div className="lg:w-[280px]  lg:h-[280px] 2xl:w-[450px] 2xl:h-[450px]  relative rounded-full bg-gradient flex justify-center  items-center">
            <img
              src="https://unsplash.com/photos/5MlBMYDsGBY"
              alt=""
              className="w-[270px] h-[270px] 2xl:w-[440px] 2xl:h-[440px] rounded-full absolute"
            />
          </div>
        </div>

        <div className="col-span-8 ">
          <div className="">
            <p className="lg:text-font-hero 2xl:text-font-large dark:text-white font-medium">
              Hello , We are Example Developers Team We create , develop the
              awesome websites , web apps and{" "}
              <span className="gradient-text">Awesome designs</span> .
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex  space-x-20">
          <div className="flex w-[180px] 2xl:w-[230px] justify-between items-center dark:text-white">
            <div className="text-font-hero 2xl:text-font-large text">10</div>
            <div className=" text-para-text text-font-sm 2xl:text-font-large-sm">
              Years <br /> OF EXPERIENCE
            </div>
          </div>

          <div className="flex w-[200px] 2xl:w-[270px] items-center justify-between dark:text-white">
            <div className="text-font-hero 2xl:text-font-large text">10</div>
            <div className=" text-para-text text-font-sm 2xl:text-font-large-sm">
              Years <br /> OF EXPERIENCE
            </div>
          </div>
        </div>

        <div className="flex">
          <div className=" dark:text-white text-right">
            <span className="text-para-text !text-xs 2xl:!text-font-large-xs">
              {" "}
              GET IN TOUCH
            </span>{" "}
            <br />
            <span className="!text-sm 2xl:!text-font-large-xs">
              example.mm@gmail.com
            </span>
          </div>
          <div className="">
            <FiMail className="gradient-text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
