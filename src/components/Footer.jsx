import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import { BiPaperPlane } from "react-icons/bi";
import SocialIcon from "./contact/SocialIcon";

const Footer = ({ socialIcons }) => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-12">
        <div className="col-span-6 flex justify-center">
          <div className="w-[450px]">
            <div className=" mb-10">
              <h1 className="dark:text-white text-[25px] font-semibold mb-4">
                Contact Us
              </h1>

              <div className="dark:text-white flex justify-between items-center">
                <HiLocationMarker className="text-[40px] mr-4" />
                <div className="">
                  <p className="text-font-xs font-semibold mb-2">
                    official address
                  </p>
                  <p className="text-para-text text-font-sm">
                    No 59 , Township, Yangon
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="dark:text-white flex items-center">
                <HiOutlineMail className="text-[40px] mr-4" />
                <div className="">
                  <p className="text-font-xs font-semibold mb-2">Email us</p>
                  <p className="text-para-text text-font-sm">
                    example.mm@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex justify-center">
          <div className=" dark:text-white w-[480PX]">
            <h1 className="dark:text-white text-[25px] font-semibold mb-4">
              TEAM NAME
            </h1>

            <div className="flex space-x-5">
              {socialIcons.map((icon, index) => {
                return <SocialIcon key={index}>{icon}</SocialIcon>;
              })}
            </div>

            <div className="flex items-center text-para-text my-6 ">
              <BiCopyright className="text-[25px] mr-2" />

              <p className="text-font-xs dark:text-white  tracking-wider">
                2023 COPY RIGHT PAING HEIN KHANT
              </p>
            </div>

            <div className="relative w-[318px]">
              <input
                type="text"
                placeholder="Type your email"
                className="bg-[#18191D] w-[318px] h-[54px] rounded-full  px-8"
              />

              <div className=" absolute right-0 top-0 w-[54px] h-[54px] bg-[#12C2E9] rounded-full flex justify-center items-center  ">
                <BiPaperPlane className=" text-[25px] text-[#212529]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
