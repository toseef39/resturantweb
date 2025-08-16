import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { TbMessageCircleUser } from "react-icons/tb";
import first from "../assets/fff.png"

export const Blogs = () => {
  const blogData = [
    {
      category: "Food menu",
      title: "How to Ensure Direct for the Hassle-Free Visa Process",
      comments: "02 comments",
    },
    {
      category: "Food menu",
      title: "How to Ensure Direct for the Hassle-Free Visa Process",
      comments: "02 comments",
    },
    {
      category: "Food menu",
      title: "How to Ensure Direct for the Hassle-Free Visa Process",
      comments: "02 comments",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="bg-primary mx-auto md:mx-0 rounded-md py-2 px-4 w-fit">
            <p className="uppercase font-semibold font-jost text-sm tracking-normal text-white">
              CRISPY, EVERY BITE TASTE
            </p>
          </div>
          <h1 className="font-bold uppercase leading-tight text-2xl text-center md:text-left sm:text-4xl md:text-[40px] max-w-xl">
            latest news insights
          </h1>
        </div>

        <button className="text-black uppercase border border-black h-[45px] px-4 flex items-center justify-center gap-2">
          view all post
          <TfiLayoutLineSolid size={20} className="text-black" />
          <HiOutlineArrowRight size={20} className="text-black" />
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogData.map((blog, index) => (
          <div key={index} className="flex flex-col">
            <img src={first} className="bg-[#D9D9D9] w-full h-64 rounded-md"/>
            <div className="mt-4">
              <h5 className="uppercase text-Paragraph font-semibold">
                {blog.category}
              </h5>
              <p className="font-bold leading-[30px] font-jost text-xl sm:text-2xl mt-2">
                {blog.title}
              </p>
              <div className="flex justify-between items-center mt-5">
                <div className="flex gap-2 items-center">
                  <TbMessageCircleUser size={24} color="red" />
                  <p className="text-base sm:text-lg font-jost text-Paragraph">
                    {blog.comments}
                  </p>
                </div>
                <GoArrowUpRight color="grey" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
