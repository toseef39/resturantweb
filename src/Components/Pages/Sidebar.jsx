import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import side1 from "../../assets/side1.jfif"
import side2 from "../../assets/side2.jfif"
import side3 from "../../assets/side3.jfif"
import gallery1 from "../../assets/gallery1.webp"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"
import gallery5 from "../../assets/gallery5.jpg"
import gallery6 from "../../assets/gallery6.jpg"
export const Sidebar = () => {
    const tags = [
        "Advice",
        "Author",
        "Consulting",
        "Delish",
        "Family",
        "Health",
        "Tip",
        "Judge",
        "Solution"
    ]
  const recentpost = [
    {
      img: side1,
      icon: <CgProfile />,
      name: "by David Smith",
      position: "Craftsmanship of Artisanal Foods in Restaurants",
    },
    {
      img: side2,
      icon: <CgProfile />,
      name: "by David Smith",
      position: "Restaurants Are Adapting to Changing Dietary Trends",
    },
    {
      img: side3,
      icon: <CgProfile />,
      name: "by David Smith",
      position: "Passion and Perseverance from Renowned Chefs",
    },
  ];
  return (
    <>
      <div className="md:block hidden md:flex-row flex-col space-y-3 w-[387px] h-[1581px] boder border-primary mt-10">
        <div className="flex items-center">
          <input
            className="w-[307px] h-[55px] outline-none "
            placeholder="Search Keywords"
            name=""
            id=""
          />
          <div className="w-[55px] h-[55px] bg-red-600 text-white">
            <CiSearch size={24} className="text-center mx-auto mt-4" />
          </div>
        </div>

        {/* 2nd */}
        <div className="w-[327px] h-[395px] flex flex-col justify-center space-y-7">
          <h1 className="font-bold font-jost text-[20px] tracking-normal leading-[100%] uppercase ">
            Recent Posts
          </h1>
          {recentpost.map((items, id) => (
            <div key={id} className="flex justify-between gap-4 items-center">
              <div className="min-w-[90px] min-h-[90px] bg-[#D9D9D9] ">
                
                <img src={items?.img}  className="min-w-[90px] min-h-[90px]"/>
              </div>
              <div className="flex flex-col gap-2 justify-between ">
                <div className="flex space-x-1">
                  <h1 className="font-light text-sm text-Paragraph tracking-normal font-jost leading-[100%]">
                    {items?.icon}
                  </h1>
                  <h1 className="font-normal text-start text-sm text-Paragraph tracking-normal font-jost leading-[100%]">
                    {items?.name}
                  </h1>
                </div>
                <h1 className="font-medium text-base leading-[22px] text-start tracking-normal font-jost">
                  {items?.position}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* 3rd  */}
        <div className=" w-[387px] h-[354px] flex flex-col justify-center space-y-3">
          <h1 className="font-bold font-jost text-[20px] tracking-normal leading-[100%] uppercase ">
            Categories
          </h1>
          <div className="w-[307px] h-[50px] flex items-center mx-auto justify-between">
            <p className="font-jost font-normal text-Paragraph text-base tracking-normal leading-[100%] ">
              Soups and Salads
            </p>
            <FaArrowRight
              size={20}
              className="font-black text-base tracking-normal leading-[100%] "
              color="red"
            />
          </div>
          <div className="w-[307px] h-[50px] flex items-center mx-auto justify-between">
            <p className="font-jost font-normal text-Paragraph text-base tracking-normal leading-[100%] ">
              Pasta and Noodles
            </p>
            <FaArrowRight
              size={20}
              className="font-black text-base tracking-normal leading-[100%] "
              color="red"
            />
          </div>
          <div className="w-[307px] h-[50px] flex items-center mx-auto justify-between">
            <p className="font-jost font-normal text-Paragraph text-base tracking-normal leading-[100%] ">
              Vegetarian and Vegan
            </p>
            <FaArrowRight
              size={20}
              className="font-black text-base tracking-normal leading-[100%] "
              color="red"
            />
          </div>
          <div className="w-[307px] h-[50px] flex items-center mx-auto justify-between">
            <p className="font-jost font-normal text-Paragraph text-base tracking-normal leading-[100%] ">
              Pizza and Flatbreads
            </p>
            <FaArrowRight
              size={20}
              className="font-black text-base tracking-normal leading-[100%] "
              color="red"
            />
          </div>
        </div>

        {/* 4th  */}
        <div className=" w-[387px] h-[280px] flex flex-wrap items-center ">
        <h1 className="font-bold font-jost text-[20px] tracking-normal leading-[100%] uppercase ">
          Gallery
        </h1>
        <div className=" w-[387px] h-[200px] flex flex-wrap items-center gap-2 ">
          {Array.from({ length: 6 }, (_, id) => (
            <img
            src={gallery1}
              key={id}
              className="w-[95px] h-[95px] bg-[#D9D9D9]"
            />
          ))}
        </div>
        </div>


        {/* 5th  */}
         <div className=" w-[387px] h-[354px] flex flex-col justify-center space-y-6">
          <h1 className="font-bold font-jost text-[20px] tracking-normal leading-[100%] uppercase ">
           Popular Tags
          </h1>
          <div className="w-[329px] h-[200px] flex flex-wrap">

       {tags.map((items, id)=>(
        <div key={id} className="flex flex-wrap">
            <div className="w-[80px] h-[35px] hover:bg-primary text-center py-2 font-jost font-semibold text-[12px] tracking-normal leading-[100%] hover:text-white">{items}</div>
        </div>

       ))}
        </div>
        
          </div>
      </div>
    </>
  );
};
