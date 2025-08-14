import React from "react";
import line from "../../assets/Union.svg";
import dot from "../../assets/dot.png";
import vertical from "../../assets/vertical.png";
import burger2 from "../../assets/burger2.svg";
import cup from "../../assets/cup.svg";
import circle from "../../assets/circle.svg";
import pizza from "../../assets/pizza.svg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";

export const Gllarypage = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <Topbar />
        <Navbar />
        <div className="w-screen md:w-[1280px] h-screen mb-[750px]  md:mb-96 md:h-[688px]  mx-auto mt-14">
          <div className="flex flex-col">
            {/* <img
              className="w-32 h-20 relative md:block hidden"
              src={circle}
              alt=""
            /> */}
            <div className="flex flex-col justify-center items-center gap-[10px] mt-6">
              <div className="w-[176px] bg-primary h-8 rounded-[5px] py-[6px] ">
                <p className="uppercase font-semibold text-sm tracking-normal text-center leading-[100%] text-white">
                  Food gallery
                </p>
              </div>

              <h1 className="font-bold text-center uppercase text-black tracking-normal md:leading-[100%] text-3xl md:text-[40px]">
                Our Foods gallery
              </h1>
              <div className="text-center mx-auto ">
                <img src={vertical} alt="" />
              </div>
              <div>
                <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
              </div>
              {/* <div className="relative left-[580px]">
                <img className="w-32 h-28 md:block hidden" src={cup} alt="" />
              </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mx-auto md:mx-0 space-x-2 mt-20">
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center rounded bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center rounded bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center rounded bg-white px-1 "
                  />
                </div>
              </div>

              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center rounded bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center rounded bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center rounded bg-white px-1 "
                  />
                </div>
              </div>
            </div>
            {/* <img
              className="w-32 relative right-28 h-20 md:block hidden "
              src={pizza}
              alt=""
            /> */}
          </div>
        </div>
       
      </div>
      <Abovefooter />
      <Footer />
    </>
  );
};
