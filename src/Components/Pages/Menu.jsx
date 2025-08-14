import React, { useState } from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import dotline from "../../assets/dot line.png";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import vertical from "../../assets/vertical.png";
import dot from "../../assets/dot.png";
import { FaComments } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Menu = () => {
  const [select, setselect] = useState("1 person");
  const [date, setDate] = useState("2024-05-16");
  const [time, setTime] = useState("09:00 am");

  const menulist = [
    {
      img: "",
      name: "Wild Mushroom Arancini",
      para: "Ricotta, goat cheese, beetroot and dateline.",
      price: "$15.00",
    },
    {
      img: "",
      name: "Honey Glazed Salmon",
      para: "Ricotta, goat cheese, beetroot and dateline.",
      price: "$15.00",
    },
    {
      img: "",
      name: "Truffle Mushroom Risotto",
      para: "Ricotta, goat cheese, beetroot and dateline.",
      price: "$15.00",
    },
    {
      img: "",
      name: "Mediterranean Quinoa Salad",
      para: "Ricotta, goat cheese, beetroot and dateline.",
      price: "$15.00",
    },
    {
      img: "",
      name: "Braised Short Ribs",
      para: "Ricotta, goat cheese, beetroot and dateline.",
      price: "$15.00",
    },
    {
      img: "",
      name: "Roasted Vegetable Platter",
      para: "Ricotta, goat cheese, beetroot and dateline.",
      price: "$15.00",
    },
  ];

  const handleSubmit = () => {
    alert(`Booking: ${select} on ${date} at ${time}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />

      <div className="bg-[#0A0A0ABA] w-full h-[300px] md:h-[427px] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold uppercase">
          Food Menu Page
        </h1>
        <div className="text-white mt-2 space-x-1">
          <a href="/">
            HOME
          </a>
          /
          <a href="/menu">
            MENU PAGE
          </a>
        </div>
        <h2 className="md:w-[1262px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
          Our Food Menu
        </h2>
      </div>

      <div className="w-full md:w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 py-10 mx-auto">
        {menulist.map((item, id) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-[#f8f8f8] p-4 rounded-lg shadow"
          >
            <div className="w-[85px] h-[85px] bg-[#D9D9D9] rounded-full flex items-center justify-center">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : null}
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                <h1 className="font-jost font-semibold text-lg md:text-xl text-center md:text-left">
                  {item.name}
                </h1>
                <img
                  src={dotline}
                  alt=""
                  className="hidden md:block w-[120px] h-[1px]"
                />
                <p className="font-jost font-semibold text-primary text-lg md:text-xl text-center md:text-left">
                  {item.price}
                </p>
              </div>
              <p className="font-jost text-sm md:text-base text-center md:text-left mt-2 text-gray-600">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-[#111111] py-8 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-10 items-center">
          <div className="text-center md:text-left space-y-3">
            <h1 className="font-jost font-semibold text-2xl md:text-3xl text-white">
              Book A Table
            </h1>
            <p className="font-jost text-sm md:text-base text-white opacity-80">
              Book an open table for your happy time
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-3">
            <select
              value={select}
              onChange={(e) => setselect(e.target.value)}
              className="w-full md:w-[180px] px-2 border border-[#202020] bg-transparent text-white h-[50px] outline-none font-jost text-base"
            >
              <option value="1 person">1 person</option>
              <option value="2 person">2 person</option>
              <option value="3 person">3 person</option>
            </select>

            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full md:w-[180px] px-2 border border-[#202020] bg-transparent text-white h-[50px] outline-none font-jost text-base"
            >
              <option value="2024-05-16">2024-05-16</option>
              <option value="2024-05-17">2024-05-17</option>
              <option value="2024-05-18">2024-05-18</option>
            </select>

            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full md:w-[180px] px-2 border border-[#202020] bg-transparent text-white h-[50px] outline-none font-jost text-base"
            >
              <option value="09:00 am">09:00 am</option>
              <option value="10:00 am">10:00 am</option>
              <option value="11:00 am">11:00 am</option>
            </select>

            <button
              onClick={handleSubmit}
              className="w-full md:w-[140px] h-[50px] bg-primary uppercase font-semibold text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="w-screen h-auto mt-12 md:mt-10 mb-20 md:mb-24">
        <div className="flex flex-col justify-center items-center gap-[10px] mt-6">
          <div className="w-[170px] bg-primary h-8 rounded-md py-[8px] px-4">
            <p className="uppercase font-semibold text-sm tracking-normal leading-[100%] text-white">
              Make reservation
            </p>
          </div>
          <div className="w-full md:w-[541px] h-auto text-center">
            <h1 className="font-bold tracking-normal leading-[100%] text-2xl md:text-[40px]">
              OUR POPULAR CHEFS
            </h1>
          </div>

          <img src={vertical} alt="" />
          <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
        </div>

        <div className="mx-auto max-w-[1300px] flex flex-col justify-center items-center  h-auto  mt-10">
          <div className="w-full md:w-[1280px] flex flex-col md:flex-row mx-auto border-primary justify-center gap-10 mt-10">
            <div className="w-[250px] mx-auto md:mx-0 md:w-[640px] h-[366px] bg-[#D9D9D9]"></div>
            <div className="w-[250px] md:w-[528px] mt-3  mx-auto md:mx-0 flex flex-col gap-5">
              <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9]"></div>
                  <h1 className="font-jost font-semibold text-sm">
                    Markus Daniel
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments size={25} color="red" />
                  <h1 className="font-jost font-semibold text-sm">2 Comment</h1>
                </div>
              </div>
              <h1 className="font-bold font-jost text-lg text-center md:text-left md:text-2xl uppercase">
                How Restaurants Foster Connections and Create Memories
              </h1>
              <button className="w-[230px] mx-auto md:mx-0 h-[48px] border border-black font-jost font-semibold flex justify-around items-center uppercase">
                Read more <FaLongArrowAltRight size={23} color="red" />
              </button>
            </div>
          </div>

          <div className="flex mt-10 md:mt-0 w-screen  md:flex-row flex-col-reverse items-center justify-center gap-10 md:ms-32">
            <div className="w-screen md:w-[528px] mx-auto md:mx-0 flex  flex-col gap-5">
              <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#D9D9D9]"></div>
                  <h1 className="font-jost font-semibold text-sm">
                    Markus Daniel
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments size={25} color="red" />
                  <h1 className="font-jost font-semibold text-sm">2 Comment</h1>
                </div>
              </div>
              <h1 className="font-bold font-jost text-lg text-center md:text-left md:text-2xl uppercase">
                Discovering Affordable Gourmet Experiences in Your City
              </h1>
              <button className="w-[230px] h-[48px] mx-auto md:mx-0 border border-black font-jost font-semibold flex justify-around items-center uppercase">
                Read more <FaLongArrowAltRight size={23} color="red" />
              </button>
            </div>
            <div className="w-[250px] md:w-[640px] h-[366px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>

      <Abovefooter />
      <Footer />
    </div>
  );
};
