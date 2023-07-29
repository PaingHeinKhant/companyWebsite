import React from "react";
import dog from "../../img/dog.jpeg";
import SectionDivider from "../SectionDivider";
import MemberImg from "./MemberImg";
import dog1 from "../../img/dog1.jpeg";
import dog2 from "../../img/dog2.jpeg";
import dog3 from "../../img/dog3.jpg";
import dog4 from "../../img/dog4.jpg";

const Team = ({ socialIcons }) => {
  const members = [
    {
      name: "Employee 1",
      desc: "We help our clients succeed by creating brand identities,digital experiences, and print materials",
      image: dog1,
      facebook: "https://www.facebook.com/example",
      linkdin: "https://www.facebook.com/example",
      slack: "https://www.facebook.com/example",
    },

    {
      name: "Employee 2",
      desc: "We help our clients succeed by creating brand identities,digital experiences, and print materials",
      image: dog2,
      facebook: "https://www.facebook.com/example",
      linkdin: "https://www.facebook.com/example",
      slack: "https://www.facebook.com/example",
    },

    {
      name: "Employee 3",
      desc: "We help our clients succeed by creating brand identities,digital experiences, and print materials",
      image: dog3,
      facebook: "https://www.facebook.com/example",
      linkdin: "https://www.facebook.com/example",
      slack: "https://www.facebook.com/example",
    },

    {
      name: "Employee 4",
      desc: "We help our clients succeed by creating brand identities,digital experiences, and print materials",
      image: dog4,
      facebook: "https://www.facebook.com/example",
      linkdin: "https://www.facebook.com/example",
      slack: "https://www.facebook.com/example",
    },
  ];

  return (
    <>
      <div className="bg-[#18191D] dark:bg-white">
        <div className="w-[90%] mx-auto ">
          <div className=" h-[100vh] flex justify-center items-center">
            <div className="w-[950px]">
              <h1 className="text-center">
                <div className="  gradient-text text-font-subtitle  text-center font-bold">
                  Our dedicated team of creatives is brusting with talent,
                  experience and passion for what we do.{" "}
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-12  pt-12">
            <div className="col-span-12 relative flex justify-center items-center">
              <img src={dog} alt="" width="942px" className="mt-[-15%] mb-16" />
            </div>

            <div className="col-span-4 flex justify-center items-center">
              <h1 className="dark:text-white text-[25px]  font-semibold mb-4">
                Who we are ?
              </h1>
            </div>

            <div className="col-span-8">
              <div className="dark:text-white w-[750px] text-para-text">
                {" "}
                we develop creative solution for small and big brands alike,
                build authentic product identities and much more.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit sit non facilisis
                vitae eut. lorem in id tristique in elementum leo nisi eleifend
                placerat magna lacus elementum ornare vehicula odio posuere
                quisque ultrices tempus cras id blandit maecenas in ornare quis
                dolor tempus risus vitae feugiat fames aliquet sed.
              </div>
            </div>
          </div>

          <div className="text-center my-20">
            <h6 className="font-sm tracking-[.35em] dark:text-white">
              BEST SERVICES
            </h6>
            <h2 className="gradient-text text-font-subtitle font-semibold">
              An original team of creators,
              <br />
              developers and dreamers
            </h2>
          </div>
        </div>

        <SectionDivider />

        <div className="">
          {members.map((member, index) => {
            return (
              <MemberImg
                key={index}
                image={member.image}
                name={member.name}
                desc={member.desc}
                facebook={member.facebook}
                linkdin={member.linkdin}
                slack={member.slack}
                index={index + 1}
                count={members.length}
                socialIcons={socialIcons}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
