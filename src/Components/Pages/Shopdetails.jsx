import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
// import { CiStar } from "react-icons/ci";
import beef from "../../assets/beef.webp"
import tt from "../../assets/tt.jpg"
import nn from "../../assets/nn.jpg"
import rib2 from "../../assets/rib2.jpg"
import veg from "../../assets/veg.jpg"
import pasta from "../../assets/pasta.jpg"
import salad from "../../assets/salad.jpg"
import rost from "../../assets/rost.jpg"
import ss from "../../assets/ss.jfif"
import pp from "../../assets/pp.jfif"
import vv from "../../assets/vv.jfif"
import cake from "../../assets/cake.jpg"

export const Shopdetails = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/shop");
  };

  const members = [
    {
      img: beef,
      star: "⭐⭐⭐⭐⭐",
      name: "Beef Bourguignon",
      price: "$15.00",
    },
    {
      img: tt,
      star: "⭐⭐⭐⭐⭐",
      name: "Spicy Tuna Tartare",
      price: "$15.00",
    },
    {
      img: nn,
      star: "⭐⭐⭐⭐⭐",
      name: "Margherita Pizza",
      price: "$15.00",
    },
    {
      img: rib2,
      star: "⭐⭐⭐⭐⭐",
      name: "Braised Short Ribs",
      price: "$15.00",
    },
    {
      img: veg,
      star: "⭐⭐⭐⭐⭐",
      name: "Vegan Buddha Bowl",
      price: "$15.00",
    },
    {
      img: pasta,
      star: "⭐⭐⭐⭐⭐",
      name: "Chicken Alfredo Pasta",
      price: "$15.00",
    },
    {
      img: salad,
      star: "⭐⭐⭐⭐⭐",
      name: "Classic Caesar Salad",
      price: "$15.00",
    },
    {
      img: rost,
      star: "⭐⭐⭐⭐⭐",
      name: "Roasted Vegetable Platter",
      price: "$15.00",
    },
    {
      img: ss,
      star: "⭐⭐⭐⭐⭐",
      name: "Pulled Pork Sandwich",
      price: "$15.00",
    },
    {
      img: pp,
      star: "⭐⭐⭐⭐⭐",
      name: "Ahi Poke Bowl",
      price: "$15.00",
    },
    {
      img: cake,
      star: "⭐⭐⭐⭐⭐",
      name: "Chocolate Lava Cake",
      price: "$15.00",
    },
    {
      img: vv,
      star: "⭐⭐⭐⭐⭐",
      name: "Lobster Bisque",
      price: "$15.00",
    },
  ];

  //     const renderStars =()=>{
  //     return(
  //       <>
  //       {Array.from({length: 5}, (_, index)=>(
  //         <span key={index}>⭐</span>
  //       ))}
  //       </>
  //     )
  //   }
  return (
    <>
      <div className="flex flex-col flex-wrap overflow-x-0">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase mt-32 md:mt-36 ">
            Shop PAGE
          </h1>

          <a className="text-white text-center relative cursor-pointer left-24 md:left-[680px] w-[146px] h-[10px] ">
            <a>HOME</a>/<a onClick={handleclick}>SHOP PAGE</a>
          </a>

          <h2 className="md:w-[1162px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
           Our Shop Page
          </h2>
        </div>
        <div className="w-screen md:mb-0 mb-[3600px] md:w-[1280px] h-[1224px] gap-5 mx-auto md:flex-row md:flex-wrap flex flex-col  mt-24">
          {members.map((items, id) => (
            <div
              key={id}
              className="w-screen md:w-[302px] h-[392px] text-center flex flex-col"
            >
              <div className="w-[250px] md:w-[302px] mx-auto md:mx-0 h-[260px]  bg-[#D9D9D9]">
                <img className="w-[250px] md:w-[302px] mx-auto md:mx-0 h-[260px] object-cover" src={items.img} alt="" />
              </div>
              <div className="border md:w-[302px] w-[250px] mx-auto h-32 space-y-3 py-2 border-[#DFDCDC]">
              <div className="font-black text-sm tracking-normal leading-[100%] ">{items.star}</div>
              <div className="font-jost font-normal text-xl leading-[100%] tracking-normal">{items.name}</div>
              <div className="font-jost font-semibold text-sm text-primary leading-[100%]">{items.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Abovefooter/>
      <Footer/>
    </>
  );
};
