import React from "react";
import vertical from "../assets/vertical.png";
import dot from "../assets/dot.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import comma from "../assets/comma.png";
import paata from "../assets/paata.png"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import amanda from "../assets/amanda.jpg"



export const Testimonials = () => {
  const scrollleft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const scrollright = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };
  return (
    <>
      <div className=" flex md:justify-evenly md:gap-36 md:items-center w-screen h-[360px] mt-[1340px] md:mt-80">
        <div className="w-[225px] h-[204px] relative top-14  ">
          <img src={first} alt="" />
        </div>
        <div className=" flex flex-col w-screen justify-center items-center gap-[10px] ">
          <div className="w-[170px] md:w-[176px] mx-auto md:mx-0 py-2 px-2 font-semibold bg-primary h-8 rounded-sm md:rounded-md md:py-[8px] md:px-4 ">
            <p className="uppercase font-normal text-sm tracking-normal leading-[100%] text-white">
              client Testimonials
            </p>
          </div>
          <div className="w-screen md:w-[541px] h-[50px] ">
            <h1 className="font-bold uppercase tracking-norma leading-[100%] text-2xl text-center md:text-left md:text-[40px]">
              Our Customer feedback
            </h1>
          </div>

          <div >
            <img src={vertical} alt="" />
          </div>
          <div>
            <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
          </div>
        </div>
        <div className="w-[225px] h-[204px] ">
          <img src={second} alt="" />
        </div>
      </div>

      {/* testimonials  */}
      <div id="slider" className="flex scroll-smooth overflow-x-auto justify-center gap-10">
        <MdChevronLeft
                onClick={scrollleft}
                size={40}
                className=" cursor-pointer bg-red-800 text-white rounded-full p-1"
              />
              
        <div className="min-w-[300px] md:min-w-[580px]  md:h-[330px] border border-primary py-10  px-10">
          <p className="font-jost md:w-[500px] font-normal text-sm md:text-xl h-[142px] text-Paragraph tracking-normal leading-[32px]">
            The only minor downside was the noise level, which made conversation
            a bit challenging at times. However, this did not significantly
            detract from the overall experience. The Culinary Corner excels in
            delivering delicious food and exceptional service.
          </p>
          <div className="md:w-[434px] mt-32 md:mt-10 flex h-16 gap-3 items-center">
            <div className="flex gap-40">
              <div className="flex justify-center items-center gap-2 md:gap-4">
                <img src={amanda} className="w-[40px] h-[40px] md:w-[65px] md:h-[65px] rounded-full "/>
                <div className="flex flex-col">
                  <h1 className="md:font-bold font-medium">Amanda Martin</h1>
                  <p className="text-Paragraph text-sm">Food Reviewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[300px] md:min-w-[580px]  md:h-[330px] border border-primary py-10 px-10">
          <p className="font-jost md:w-[500px] font-normal text-sm md:text-xl h-[142px] text-Paragraph tracking-normal leading-[32px]">
            The only minor downside was the noise level, which made conversation
            a bit challenging at times. However, this did not significantly
            detract from the overall experience. The Culinary Corner excels in
            delivering delicious food and exceptional service.
          </p>
          <div className="md:w-[434px] mt-32 md:mt-10 flex h-16 gap-3 items-center">
            <div className="flex gap-40">
              <div className="flex justify-center items-center gap-2 md:gap-4">
                <img src={amanda} className="w-[40px] h-[40px] md:w-[65px] md:h-[65px] rounded-full "/>
                <div className="flex flex-col">
                  <h1 className="md:font-bold font-medium">Amanda Martin</h1>
                  <p className="text-Paragraph text-sm">Food Reviewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[300px] md:min-w-[580px]  md:h-[330px] border border-primary py-10 px-10">
          <p className="font-jost md:w-[500px] font-normal text-sm md:text-xl h-[142px] text-Paragraph tracking-normal leading-[32px]">
            The only minor downside was the noise level, which made conversation
            a bit challenging at times. However, this did not significantly
            detract from the overall experience. The Culinary Corner excels in
            delivering delicious food and exceptional service.
          </p>
          <div className="md:w-[434px] mt-32 md:mt-10 flex h-16 gap-3 items-center">
            <div className="flex gap-40">
              <div className="flex justify-center items-center gap-2 md:gap-4">
                <img src={amanda} className="w-[40px] h-[40px] md:w-[65px] md:h-[65px] rounded-full "/>
                <div className="flex flex-col">
                  <h1 className="md:font-bold font-medium">Amanda Martin</h1>
                  <p className="text-Paragraph text-sm">Food Reviewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <MdChevronRight
                onClick={scrollright}
                size={40}
                className=" cursor-pointer bg-red-800 text-white rounded-full p-1"
              />
      </div>
         <div className="w-[97px] h-[81px] md:block hidden float-right mt-28 me-10">
      <img src={paata} alt="" />
    </div>
    </>
  );
};
