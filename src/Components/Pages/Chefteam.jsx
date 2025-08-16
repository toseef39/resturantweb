import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
import waiter from "../../assets/waiter.jpg"
import waiter2 from "../../assets/waiter2.jfif"
import waiter3 from "../../assets/waiter3.jpg"
import waiter4 from "../../assets/waiter4.jpg"
import waiter5 from "../../assets/waiter5.jfif"
import waiter6 from "../../assets/waiter6.jpg"

export const Chefteam = () => {
const navigate = useNavigate()
  const team = [
    {
      img: waiter,
      name: "Kuman Tunman",
      position: "waiter",
    },
    {
      img: waiter2,
      name: "Benjamin Kenneth",
      position: "waiter",
    },
    {
      img: waiter3,
      name: "Matthew Nathaniel",
      position: "waiter",
    },
    {
      img: waiter4,
      name: "George  James",
      position: "waiter",
    },
    {
      img: waiter5,
      name: "Edward may",
      position: "waiter",
    },
    {
      img: waiter6,
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
          <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase mt-32 md:mt-36 ">
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
                  <img className="w-[250px] md:w-[350px] h-[390px] object-cover" src={items.img} alt="" />
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
