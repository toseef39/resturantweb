import React from "react";
import rec from "../assets/rect.png";

export const Topbar = () => {
  return (
    <>
      <div className="hidden md:flex me-4 flex-row flex-wrap  justify-between top-6 text-white bg-Secondary p-4">
        <div className="flex flex-w gap-3 items-center top-6">
          <p className="font-normal regular tracking-normal leading-[100%] text-[16px]">
            Mon-Wed:11am-9pm
          </p>
          <img src={rec} alt="" />
          <p>Thur-Sun:11am-10pm</p>
        </div>
        <div className="flex flex-wrap gap-3 items-center top-6">
          <p className="font-normal regular tracking-normal leading-[100%] text-[16px]">reservations@Delish.com</p>
          <img src={rec} alt="" />
          <p className="font-normal regular tracking-normal leading-[100%] text-[16px]">123 456 7899</p>
          <img src={rec} alt="" />
          <p className="font-normal regular tracking-normal leading-[100%] text-[16px]">296 Ridao Avenie Mor Berlin 251584</p>
        </div>
      </div>
    </>
  );
};
