import React from "react";
import logo from "../assets/logo.png"
import footerbg from "../assets/footerbg.png";
import { FaArrowRight } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <div className="w-screen h-[1000px] md:h-auto bg-black">
        <img className="absolute md:block hidden" src={footerbg} alt="" />
<img className="mx-auto md:hidden" src={logo} alt="" />
        <div className="flex flex-col mt-7 md:mt-0 items-center md:items-start md:flex-row md:mx-44 md:justify-around md:relative  md:top-32">

          {/* 1st div  */}
          <div className="w-[254px] h-[224px] cursor-pointer">
            <h1 className="font-bold text-lg text-white ">
              Get in touch
            </h1>
            <div className="w-[254px] h-1  border-2 border-t-0 border-x-0 border-b-[#3A3940] my-3"></div>

            <p className="text-white font-jost text-base ">
              Silk St, Barbican, London E2Y, UK
            </p>
            <p className="text-white font-jost text-base ">+39-055-123456</p>
            <a className="text-white  font-jost text-base ">
              booking@webexample.com
            </a>
          </div>
          {/* 2nd div  */}

          <div className="w-[254px] h-[224px] cursor-pointer">
            <h1 className="font-bold text-lg text-white ">
              Food menu
            </h1>
            <div className=" w-[254px] h-1 border-2 border-t-0 border-x-0 border-b-[#3A3940] my-3"></div>

            <p className="text-white uppercase items-center font-jost text-base gap-3 flex">
              <FaArrowRight color="white" size={15} />
              white castle
            </p>

            <p className="text-white uppercase items-center font-jost text-base gap-3 flex">
              <FaArrowRight color="white" size={15} />
              Beef Sandwich
            </p>
            <p className="text-white uppercase items-center font-jost text-base gap-3 flex">
              <FaArrowRight color="white" size={15} />
              Cherry Limeade
            </p>
            <p className="text-white uppercase items-center font-jost text-base gap-3 flex">
              <FaArrowRight color="white" size={15} />
              Wendy’s Frosty
            </p>
            <p className="text-white uppercase items-center font-jost text-base gap-3 flex">
              <FaArrowRight color="white" size={15} />
              Pumpkin Spice
            </p>
          </div>

          {/* 3rd div  */}

          <div className="w-[254px] h-[224px] cursor-pointer">
            <h1 className="font-bold text-lg text-white ">
              Working Hours
            </h1>
            <div className="w-[254px] h-1 border-2 border-t-0 border-x-0 border-b-[#3A3940] my-3"></div>

            <p className="text-white font-jost text-base ">
              Monday - Friday09:00 - 22:00
            </p>
            <p className="text-white font-jost text-base ">
              Saturday11:00 - 00:00
            </p>
            <p className="text-white  font-jost text-base ">
              Sunday11:00 - 23:00
            </p>
            <p className="text-white mt-4 font-jost text-base ">
              * Happy hour17:00 - 21:00
            </p>
          </div>

          {/* 4th div  */}
          <div className="w-[254px] h-[224px] cursor-pointer">
            <h1 className="font-bold text-lg text-white ">
              Instagram
            </h1>
            <div className="w-[254px] h-1  border-2 border-t-0 border-x-0 border-b-[#3A3940] my-3"></div>
            <div className="flex flex-wrap gap-1">
              <p className="bg-[#D9D9D9] w-[80px] h-[80px]"></p>
              <p className="bg-[#D9D9D9] w-[80px] h-[80px]"></p>
              <p className="bg-[#D9D9D9] w-[80px] h-[80px]"></p>
              <p className="bg-[#D9D9D9] w-[80px] h-[80px]"></p>
              <p className="bg-[#D9D9D9] w-[80px] h-[80px]"></p>
              <p className="bg-[#D9D9D9] w-[80px] h-[80px]"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
