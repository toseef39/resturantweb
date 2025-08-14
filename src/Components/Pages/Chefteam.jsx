import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";

export const Chefteam = () => {
const navigate = useNavigate()
  const team = [
    {
      img: "",
      name: "Kuman Tunman",
      position: "waiter",
    },
    {
      img: "",
      name: "Benjamin Kenneth",
      position: "waiter",
    },
    {
      img: "",
      name: "Matthew Nathaniel",
      position: "waiter",
    },
    {
      img: "",
      name: "George  James",
      position: "waiter",
    },
    {
      img: "",
      name: "Edward may",
      position: "waiter",
    },
    {
      img: "",
      name: "Patrick Robert",
      position: "waiter",
    },
  ];
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-6xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase  mt-36 ">
            our chef
          </h1>

          <a className="text-white text-center relative cursor-pointer left-24 md:left-[680px] w-[146px] h-[10px] ">
            <a>HOME</a>/<a onClick={()=>navigate("/chefdetails")} >OUR CHEF</a>
          </a>

          <h2 className=" md:w-[1010px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            team expert
          </h2>
        </div>
        <div className="w-screen md:w-[1280px] mb-[1700px] md:mb-0 md:flex-row flex flex-col md:flex-wrap justify-around mt-20 h-[1080px] mx-auto">
          {team.map((items, id) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center mb-9 md:mb-0 md:gap-y-4"
              >
                <div className="w-[250px] md:w-[350px] h-[390px] bg-[#D9D9D9]">
                  {items.img}
                </div>
                <div className="font-extrabold tracking-normal mt-3 md:mt-0 text-center leading-[100%] text-[22px]">
                  {items.name}
                  <div className="font-normal text-lg  tracking-normal leading-[100px text-center]">
                    {items.position}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Abovefooter />
      <Footer />
    </>
  );
};
