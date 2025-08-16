import React from "react";
import { Navbar } from "../Navbar";
import { Topbar } from "../Topbar";
import { Footer } from "../Footer";
import { Abovefooter } from "../Abovefooter";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import ceo from "../../assets/ceoo.webp"

export const Chefdetail = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase mt-32 md:mt-36 ">
            our chef
          </h1>

          <a className="text-white text-center relative cursor-pointer left-24 md:left-[680px] w-[146px] h-[10px] ">
            HOME/CHEF Details
          </a>

          <h2 className=" md:w-[1010px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            team expert
          </h2>
        </div>
      </div>
      <div className="w-screen px-auto mt-14 space-y-20 md:space-y-0 md:gap-10 md:w-[1280px] h-[850px] md:h-[742px] flex flex-col md:flex-row md:items-center justify-center mx-auto">

        <div className="w-screen md:w-[552px] h-[542px] space-y-4">
          <h1 className="font-jost text-center md:text-left font-bold text-3xl md:text-[40px] tracking-normal leading-[100%]">
            Richard John
          </h1>
          <p className="text-primary text-base text-center md:text-left font-medium tracking-normal leading-[100%] font-jost  ">
            founder & CEO
          </p>
          <p className="text-Paragraph font-jost font-normal text-center md:text-left leading-[20px] tracking-normal text-sm md:text-base">
            Sem consequat mauris conubia inceptos nostra rutrum morbi sagittis
            pulvinar, commodo curabitur maecenas fermentum magna tempus nisi
            ullamcorper, ante auctor magnis pretium eu lectus euismod platea.
            Congue sociosqu nostra est urna pellentesque placerat euismod
            bibendum.
          </p>

          {/* 1st box  */}
          <div className="border border-b-[#E5E3E3] hidden md:block md:w-[544px]"></div>
          <div className="md:flex-row flex flex-col space-y-6 md:space-y-0 md:gap-20">
            <div className="flex mx-auto md:mx-0">
              <div className="w-[50px]  py-3 h-[50px]">
                <IoPersonSharp className="mx-auto" size={20} color="red" />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-base font-normal font-jost tracking-normal leading-[100%] text-Paragraph">
                  Experience
                </h1>
                <h2 className="font-jost font-medium text-lg tracking-normal leading-[100%]">
                  More Than 10 Years
                </h2>
              </div>
            </div>

            <div className="flex mx-auto md:mx-0">
              <div className="w-[50px] py-3 h-[50px]">
                <MdEmail className="mx-auto" size={20} color="red" />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-base font-normal font-jost tracking-normal leading-[100%] text-Paragraph">
                  Email
                </h1>
                <h2 className="font-jost font-medium text-lg tracking-normal leading-[100%]">
                  info@agency.com
                </h2>
              </div>
            </div>
          </div>

          {/* 2nd box  */}

          <div className="border border-b-[#E5E3E3] md:block hidden md:w-[544px]"></div>

          <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:gap-20">
            <div className="flex mx-auto md:mx-0 ">
              <div className="w-[50px] py-3 h-[50px]">
                <IoPersonSharp className="mx-auto" size={20} color="red" />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-base font-normal font-jost tracking-normal leading-[100%] text-Paragraph">
                  Phone
                </h1>
                <h2 className="font-jost font-medium text-lg tracking-normal leading-[100%]">
                  +(256) 58621-69581
                </h2>
              </div>
            </div>

            <div className="flex mx-auto md:mx-0 ">
              <div className="w-[50px] py-3 h-[50px]">
                <FaFax className="mx-auto" size={20} color="red" />
              </div>
              <div className="flex flex-col space-y-2">
                <h1 className="text-base font-normal font-jost tracking-normal leading-[100%] text-Paragraph">
                  Fax
                </h1>
                <h2 className="font-jost font-medium text-lg tracking-normal leading-[100%]">
                  +2568145632
                </h2>
              </div>
            </div>
          </div>
          <div className="border border-b-[#E5E3E3] hidden md:block md:w-[544px]"></div>
          <button className="w-[120px] mx-auto md:mx-0 md:w-[180px] h-[50px] font-jost font-semibold text-base tracking-normal text-white leading-[100%] bg-primary">
            Contact me
          </button>
        </div>
        <img src={ceo} className="w-[280px] object-cover mx-auto min-h-[300px] md:w-[480px] md:h-[542px]"/>
      </div>
      <Abovefooter/>
      <Footer/>
    </>
  );
};
