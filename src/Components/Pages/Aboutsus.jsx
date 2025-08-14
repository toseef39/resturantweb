import React from "react";
import { TbArrowUpBar } from "react-icons/tb";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/laptop.svg";
import line from "../../assets/Union.svg";
import dot from "../../assets/dot.png";
import vertical from "../../assets/vertical.png";
import burger2 from "../../assets/burger2.svg";
import cup from "../../assets/cup.svg";
import circle from "../../assets/circle.svg";
import pizza from "../../assets/pizza.svg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";

export const Aboutsus = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col ">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-5xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase  mt-36 ">
            About Us
          </h1>

          <h2 className=" md:w-[717px] h-[120px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            About Us
          </h2>
        </div>
        <div>
          <div className="w-screen md:w-[1300px] md:h-[615px] mt-20 md:mx-auto">
            <div className="flex flex-col  md:flex-row md:justify-evenly md:items-center gap-24">
              <img className="w-32 h-20 md:block hidden" src={burger2} alt="" />
              <div className="flex flex-col space-y-5 md:w-[450px] h-[475px]">
                <div className=" flex flex-col justify-center gap-[10px] ">
                  <div className="w-[176px] mx-auto md:mx-0 bg-primary h-5 rounded-[5px] py-1 gap-[10px] ">
                    <p className="uppercase w-[176px] h-5 font-semibold text-sm tracking-normal leading-[100%] text-center text-white">
                      crispy, every bite
                    </p>
                  </div>
                  <div className="w-screen md:w-[447px] h-[100px]">
                    <h1 className="font-bold uppercase tracking-normal text-center md:text-left leading-[30px] md:leading-[50px] font-jost text-3xl md:text-[40px]">
                      Delicious Food For Healthy Life
                    </h1>
                    <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row mt-6 gap-3">
                      <img src={icon} alt="" />
                      <img className="md:block hidden" src={line} alt="" />

                      <div>
                        <h1 className="text-center md:text-left font-semibold text-lg">
                          Quality Food
                        </h1>
                        <p className="font-normal text-center md:text-left tracking-normal leading-[20px] md:leading-[26px] text-base text-Paragraph font-jost ">
                          The wise man therefore always holds Indies matters
                          this principle information
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row mt-12 md:mt-6 gap-3">
                      <img src={icon2} alt="" />
                      <img className="md:block hidden" src={line} alt="" />
                      <div>
                        <h1 className="text-center md:text-left font-semibold text-lg">
                          Supply Chain Maintain
                        </h1>
                        <p className="font-normal text-center md:text-left tracking-normal leading-[20px] md:leading-[26px] text-base text-Paragraph font-jost ">
                          The wise man therefore always holds Indies matters
                          this principle information
                        </p>
                      </div>
                    </div>
                    <button className="mt-9 mx-16 md:mx-0 w-[205px] h-[53px] border-l text-center  border border-black font-bold text-base tracking-normal leading-[100%] uppercase">
                      Book a Table
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[300px] mt-7 md:mt-0 mx-auto h-[350px] md:mx-0 md:w-[652px] md:h-[478px] bg-[#D9D9D9] "></div>
            </div>
          </div>
        </div>

        {/* gallery  */}
        <div className="w-screen md:w-[1280px] h-[688px] mx-auto mt-14">
          <div className="flex flex-col">
            <img
              className="w-32 h-20 relative md:block hidden"
              src={circle}
              alt=""
            />
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
              <div className="relative left-[580px]">
                <img className="w-32 h-28 md:block hidden" src={cup} alt="" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mx-auto md:mx-0 space-x-2 mt-20">
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center bg-white px-1 "
                  />
                </div>
              </div>

              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center bg-white px-1 "
                  />
                </div>
              </div>
              <div className="w-[250px] h-[200px] md:w-[410px] mx-auto  md:h-[343px] bg-[#D9D9D9] hover:bg-primary relative group">
                <div className="absolute md:top-2 ms-24 md:ms-44 mt-20 md:mt-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdOutlineRemoveRedEye
                    size={40}
                    color="red"
                    className="text-center bg-white px-1 "
                  />
                </div>
              </div>
            </div>
            <img
              className="w-32 relative right-28 h-20 md:block hidden "
              src={pizza}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] mt-6">
          <div className="w-[176px] bg-primary h-8 rounded-[5px] py-[6px] ">
            <p className="uppercase font-semibold text-sm tracking-normal text-center leading-[100%] text-white">
              amke Reservation
            </p>
          </div>
        </div>

        {/* title  */}

        <div className="mt-[800px] md:mt-[600px]">
          <div className="flex flex-col justify-center items-center gap-[10px] mt-6">
            <div className="w-[176px] bg-primary h-8 rounded-[5px] py-[6px] ">
              <p className="uppercase font-semibold text-sm tracking-normal text-center leading-[100%] text-white">
                make reservation
              </p>
            </div>

            <h1 className="font-bold text-center uppercase text-black tracking-norma leading-[100%] text-3xl md:text-[40px]">
              Discover Our Category
            </h1>
            <div className="text-center mx-auto ">
              <img src={vertical} alt="" />
            </div>
            <div>
              <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
            </div>
            <div className="relative left-[580px]">
              <img className="w-32 h-28 md:block hidden" src={cup} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-9 items-center">
        {/* 1st div    */}
        <div className="flex flex-col gap-y-9">
          <div className="w-[250px] mx-auto md:w-[311px] h-[275px] bg-[#D9D9D9]"></div>
          <div>
            <div className="w-[311px] h-[100px] ">
              <h1 className="text-center font-bold font-jost tracking-normal leading-[100%] uppercase text-[22px]">
                Quality Chees
              </h1>
              <p className="font-normal text-Paragraph text-base tracking-normal text-center leading-[26px] font-jost ">
                Consectetur adipiscing elit quisque eget maximus velit, non
                eleifend libero curabitur dapibus mauris sed leo cursus
              </p>
            </div>
          </div>
        </div>

        {/* 2nd div  */}

        <div className="flex flex-col gap-y-9">
          <div className="w-[250px] mx-auto md:w-[311px] h-[275px] bg-[#D9D9D9]"></div>
          <div>
            <div className="w-[311px] h-[100px] ">
              <h5 className="text-center font-bold font-jost tracking-normal leading-[100%] uppercase text-[22px]">
                Crunchi French Fry
              </h5>
              <p className="font-normal text-Paragraph text-base tracking-normal text-center leading-[26px] font-jost mt-2">
                Consectetur adipiscing elit quisque eget maximus velit, non
                eleifend libero curabitur dapibus mauris sed leo cursus
              </p>
            </div>
          </div>
        </div>

        {/* 3rd div  */}
        <div className="flex flex-col gap-y-9">
          <div className="w-[250px] mx-auto md:w-[311px] h-[275px] bg-[#D9D9D9]"></div>
          <div>
            <div className="w-[311px] h-[100px] ">
              <h5 className="text-center font-bold font-jost tracking-normal leading-[100%] uppercase text-[22px]">
                100% Halal Meat
              </h5>
              <p className="font-normal text-Paragraph text-base tracking-normal text-center leading-[26px] font-jost mt-2">
                Consectetur adipiscing elit quisque eget maximus velit, non
                eleifend libero curabitur dapibus mauris sed leo cursus
              </p>
            </div>
          </div>
        </div>
      </div>

      <Abovefooter />
      <Footer />
    </>
  );
};
