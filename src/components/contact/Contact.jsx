import React from "react";
import Input from "./Input";

import SocialIcon from "./SocialIcon";
import { Footer } from "flowbite-react";

const Contact = ({ socialIcons }) => {
  const InputNames = ["Name", "Email"];

  return (
    <>
      <div className="w-[90%] mx-auto ">
        <div className=" h-[100vh] flex justify-center items-center">
          <div className="">
            <h1 className="text-center">
              <div className="gradient-text text-font-subtitle  text-center font-bold">
                Let's Talk
                <br /> About Your Project{" "}
              </div>
              <div className="tracking-wide text-center text-para-text">
                Feel free to ask me any question or let's do to talk about our
                future collaboration
              </div>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-7">
            <div className="">
              <h2 className="text-[26px] gradient-text font-semibold mb-10">
                Get In Touch
              </h2>

              {InputNames.map((name) => (
                <Input name={name}>{name}</Input>
              ))}

              <textarea
                name=""
                id=""
                rows="5"
                className="text-font-sm pb-3 mt-4 w-[588px] font-semibold text-para-text  border-para-text bg-transparent focus:outline-none focus:outline-0 focus:ring-0  focus:border-gray-500 focus:dark:border-white "
                placeholder="Message"
              ></textarea>
            </div>
          </div>

          <div className="col-span-5">
            <h2 className="text-[26px] gradient-text font-semibold mb-10">
              Contact Info
            </h2>

            <div className="grid grid-cols-12 h-full ">
              <div className="col-span-12 h-[90px]">
                <div className="text-font-title tracking-widest dark:text-white">
                  Let's Talk
                </div>

                <div className="my-3 space-y-3">
                  <div className="text-font-sm text-para-text underline">
                    example.mm@gmail.com
                  </div>
                  <div className="text-font-sm text-para-text">0975177998</div>
                </div>
              </div>

              <div className="col-span-12 ">
                <div className="text-font-title tracking-widest dark:text-white">
                  Visit Us
                </div>

                <div className="my-3 ">
                  <div className="text-font-sm text-para-text">
                    No.59, example, Yangon
                  </div>
                </div>

                <div className="flex space-x-5">
                  {socialIcons.map((icon, index) => {
                    return <SocialIcon key={index}>{icon}</SocialIcon>;
                  })}
                </div>
              </div>
            </div>
          </div>

          <button
            className="py-3 mt-8  px-2 w-[180px] dark:border-white border-black border dark:text-white
             "
          >
            Send Message
          </button>
        </div>
      </div>
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5971.604366685527!2d96.12747936625674!3d16.825654288706698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfbc57a6b958cc307!2sSein%20Gay%20Har%20Hledan!5e0!3m2!1sen!2smm!4v1676129288406!5m2!1sen!2smm"
          className="w-full h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
