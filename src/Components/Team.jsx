import React from "react";
import vertical from "../assets/vertical.png";
import dot from "../assets/dot.png";
import bg from "../assets/bg.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Team = () => {
  return (
    <>
      <div className=" flex justify-evenly gap-36 items-center w-screen h-[360px] absoulte top-0">
        <div className=" flex flex-col justify-center items-center gap-[10px] ">
          <div className="w-[150px] md:w-[170px] bg-primary h-8 rounded-md py-2 px-2 md:py-[8px] md:px-4 ">
            <p className="uppercase font-semibold text-sm tracking-normal leading-[100%] text-white">
              make resevation
            </p>
          </div>
          <div className="w-screen md:w-[541px] h-[50px] ">
            <h1 className="font-bold uppercase tracking-norma leading-[100%] text-2xl text-center md:text-left md:text-[40px]">
              meet the expert chef
            </h1>
          </div>

          <div>
            <img src={vertical} alt="" />
          </div>
          <div>
            <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-7 relative md:top-32 z-50">
        <div className="flex flex-col mx-auto md:mx-0">
          <div className="w-[260px] h-[300px]  md:w-[410px] md:h-[410px] bg-[#D9D9D9]"></div>
          <div className="md:w-[410px] w-[260px] h-20 text-center bg-[#4F4F4F]">
            <h1 className="font-bold text-white">Kuman Tunman</h1>
            <p className="font-medium text-sm text-white font-jost">Waiter</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto md:mx-0">
          <div className="w-[260px] h-[300px] md:w-[410px] md:h-[410px] bg-[#D9D9D9]"></div>
          <div className="w-[260px] md:w-[410px] h-20 text-center bg-[#4F4F4F]">
            <h1 className="font-bold text-white">Kuman Tunman</h1>
            <p className="font-medium text-sm text-white font-jost">Waiter</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto md:mx-0">
          <div className="w-[260px] h-[300px] md:w-[410px] md:h-[410px] bg-[#D9D9D9]"></div>
          <div className="w-[260px] md:w-[410px] h-20 text-center bg-[#4F4F4F]">
            <h1 className="font-bold text-white">Kuman Tunman</h1>
            <p className="font-medium text-sm text-white font-jost">Waiter</p>
          </div>
        </div>
      </div>
      <img src={bg} className="w-full hidden md:block h-[350px]" alt="" />
      <div className="hidden md:block md:w-full h-[350px] bg-[#0B0A0A] ">
        <div className=" w-[726px] h-[285px] mx-auto py-20 text-center">
          <div className="w-[250px]  bg-primary mx-auto h-10 rounded-md py-3 px-3 ">
            <p className="uppercase font-semibold text-sm tracking-normal leading-[100%] text-white">
              CRISPY, EVERY BITE TASTE
            </p>
            </div>
            
              <h1 className="font-bold text-white tracking-normal text-5xl leading-[70px]">
                LOOKING FOR POPULAR <br /> FAST FOOD
              </h1>
           

            <div className="text-white gap-2 border mx-auto mt-5 border-white h-[45px] w-[192px] flex items-center justify-center">
              Read more <TfiLayoutLineSolid size={23} className="text-white" />
              <HiOutlineArrowRight size={20} className="text-white" />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
