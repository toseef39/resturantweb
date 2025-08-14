import React, { useState } from "react";
import bubble from "../assets/bubble.png";
import vertical from "../assets/vertical.png";
import dot from "../assets/dot.png";
import fullburger from "../assets/fullburger.png";

export const Booktable = () => {
  const [select, setselect] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();


  const handlechange = (e) => {
    setselect(e.target.value);
   

  };
  

  const handledatechange = (e) => {
    setDate(e.target.value)

  };
  
  const handletimechange = (e) => {
    setTime(e.target.value)

  };
  return (
    <>
    <div className="w-[97px] md:block hidden h-[81px] mt-28 ms-10">
      <img src={fullburger} alt="" />
    </div>
  
      <div className="w-[1200px] md:block hidden h-[615px] mt-20 mx-auto">
        <img className="ms-8 mt-8" src={bubble} alt="" />

        <div className="flex justify-center gap-24 mt-11">
          <div className=" flex flex-col justify-evenly items-center w-[442px] h-[475px]">
            <div className=" flex flex-col justify-center items-center gap-[10px] ">
              <div className="w-[132px] bg-primary h-8 rounded-md py-[8px] px-4 ">
                <p className="uppercase font-normal text-sm tracking-normal leading-[100%] text-white">
                  book a table
                </p>
              </div>
              <div className="w-[406px] h-[58px] mt-10">
                <h1 className="font-bold uppercase tracking-normal leading-[100%] text-[40px]">
                  make reservation
                </h1>
              </div>

              <div>
                <img src={vertical} alt="" />
              </div>
              <div>
                <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
              </div>
            </div>
            <div>
              <select value={select} onChange={handlechange} className="w-[442px] h-[50px] mb-3 outline-none border-0 font-jost text-base">
                <option value="1 person">1 person</option>
                <option value="2 person">2 person</option>
                <option value="3 person">3 person</option>
              </select>

              <select
                value={date}
                onChange={handledatechange}
                className="w-[442px] h-[50px] mb-3 outline-none border-0 font-jost text-base"
              >
                <option value="2024-05-16">
                  2024-05-16
                </option>
                <option value=" 2024-05-17">
                  2024-05-17
                </option>
                <option  value="2024-05-18">
                  2024-05-18
                </option>
              </select>
              <select
                value={time}
                onChange={handletimechange}
                className="w-[442px] h-[50px] outline-none mb-3 font-jost text-base"
              >
                <option value="09:00 am">
                  09:00 am
                </option>
                <option value="10:00 am">
                  10:00 am
                </option>
                <option value=" 11:00 am">
                 11:00 am
                </option>
              </select>
              <button className="w-[442px] h-[50px] bg-primary uppercase font-semibold text-center text-white ">
                Book now
              </button>
            </div>
          </div>
          <div className="w-[518px] h-[480px] bg-[#D9D9D9] "></div>
        </div>
       
      </div>
    </>
  );
};
