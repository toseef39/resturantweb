import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { PiGreaterThanThin } from "react-icons/pi";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import { FaArrowRight } from "react-icons/fa6";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";
import blog1 from "../../assets/blog1.avif"
import blog2 from "../../assets/blog2.jfif"
import blog3 from "../../assets/blog3.jfif"
import blog4 from "../../assets/blog4.jfif"

export const Blog = () => {
const navigate = useNavigate()
const handlenavigation = ()=>{
  navigate("/detailblog")
}

  const blogsdetails = [
    {
      img: blog1,
      btn2: "Foodies",
      comments: "by admin",
      date: "24 Feb, 2024",
      heading: "Iconic Establishments Are Reinventing",
      para: "Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...",
      btn: "Read Details  ",
    },
    {
      img: blog2,
      btn2: "Foodies",
      comments: "by admin",
      date: "24 Feb, 2024",
      heading: "Exploring the World of Food and Wine",
      para: "Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...",
      btn: "Read Details",
    },
    {
      img: blog3,
      btn2: "Foodies",
      comments: "by admin",
      date: "24 Feb, 2024",
      heading: "What It Takes to Achieve Excellence",
      para: "Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...",
      btn: "Read Details",
    },
    {
      img: blog4,
      btn2: "Foodies",
      comments: "by admin",
      date: "24 Feb, 2024",
      heading: "Affordable Gourmet Experiences",
      para: "Efficiently reinvent installed base opportunities after team driven quality vectors. Dramatically for value added partnerships. Holisticly reintermediate client based materials...",
      btn: "Read Details",
    },
  ];
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase mt-32 md:mt-36 ">
            Latest News
          </h1>

          <a className="text-white text-center relative cursor-pointer left-24 md:left-[680px] w-[146px] h-[10px] ">
            <a onClick={()=>{
              navigate("/")
            }}>HOME</a>/<a onClick={handlenavigation}>BLOGS DETAILS</a>
          </a>

          <h2 className="md:w-[1153px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            News Insights
          </h2>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col w-screen md:w-[829px] h-[732px] mt-10 mb-[1950px] md:mb-[2300px] space-y-9">
            {blogsdetails.map((items, id) => (
              <>
                <div key={id} className="flex flex-col space-y-6">
                  <div className="w-[300px] mx-auto md:mx-0 h-[250px] md:w-[829px] md:h-[450px] bg-[#D9D9D9]">
                    <img className="w-[300px] mx-auto md:mx-0 h-[250px] md:w-[829px] md:h-[450px] object-cover" src={items.img} alt="" />
                  </div>
                  <div className="md:block mx-auto md:mx-0 hidden w-[95px] h-[30px] bg-primary relative bottom-[420px] left-4 ">
                    <p className="font-semibold text-white text-sm tracking-normal text-center py-2 leading-[100%]">
                      {items.btn2}
                    </p>
                  </div>

                  <div className="flex w-64 md:w-[300px] md:gap-6">
                    <div className="flex md:gap-2 mx-auto md:mx-0 items-center">
                      <MdDateRange size={15} color="red" />
                      <p className="font-jost text-sm md:text-base tracking-normal leading-[100%] uppercase text-Paragraph ">
                        {items.date}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <IoPersonOutline size={15} color="red" />
                      <p className="font-jost text-sm md:text-base tracking-normal  leading-[100%] uppercase text-Paragraph ">
                        {items.comments}
                      </p>
                    </div>
                  </div>
                  <h1 className="font-jost font-bold text-sm w-screen px-10 md:px-0 leading-[20px] md:text-[30px] tracking-normal md:leading-[100%] text-black uppercase ">
                    {items.heading}
                  </h1>
                  <p className="font-jost w-screen md:w-[749px] md:h-[38px] text-justify md:text-left px-10 md:px-0 text-Paragraph font-normal  md:text-base tracking-normal leading-[26px] ">
                    {items.para}
                  </p>
                  <div className=" border-l-0 border-e-0 border-t-0  border-b-[#E1DFDE] border border-primary w-screen h-[1px] md:w-[749px]"></div>
                </div>
                <div className="text-primary cursor-pointer mx-auto md:mx-0 border-solid  text-sm font-semibold tracking-normal leading-[100%] flex items-center gap-2 ">
                  {items.btn}{" "}
                  <span className="flex">
                    <PiGreaterThanThin /> <PiGreaterThanThin />
                  </span>
                </div>
              </>
            ))}
            <div className="flex items-center mx-auto md:mx-0 gap-2">
            <div className="w-[55px] h-[55px] bg-[#F6F6F6] hover:bg-primary hover:text-white py-4 text-center font-jost font-medium text-base tracking-normal leading-[100%] ">
              1
            </div>
            <div className="w-[55px] h-[55px] bg-[#F6F6F6] hover:bg-primary hover:text-white py-4 text-center font-jost font-medium text-base tracking-normal leading-[100%] ">
              2
            </div>
            <div className="w-[55px] h-[55px] bg-[#F6F6F6] hover:bg-primary hover:text-white py-4 text-center font-jost font-medium text-base tracking-normal leading-[100%] ">
              3
            </div>
            <div className="w-[55px] h-[55px] bg-[#F6F6F6] hover:bg-primary hover:text-white py-4 text-center font-jost font-medium text-base tracking-normal leading-[100%] ">
              <FaArrowRight size={20} className="mx-auto" />
            </div>
          </div>
          </div>
          <Sidebar/>
        </div> 
      </div>
      <Abovefooter />
      <Footer />
    </>
  );
};
