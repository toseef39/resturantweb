import React, { useState } from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
import grilled from "../../assets/griiled.webp"

export const Shoppage = () => {
  const [activetab, setActivetab] = useState("para")
  const navigate = useNavigate()

  const handleclick = ()=>{
    navigate("/shopdetail")
  }


  const para = `Credibly negotiate emerging materials whereas clicks-and-mortar intellectual capital. Compellingly whiteboard client-centric sourcescross-platform schemas. Distinctively develop future-proof outsourcing without multimedia based portals. Progressively coordinate generation architectures for collaborative solutions. Professionally restore backward-compatible quality vectors before customer directed metrics. Holisticly restore technically sound internal or  sources before client-centered human capital underwhelm holistic  mindshare for prospective innovation.
  
  Seamlessly target fully tested infrastructures whereas just in time process improvements. Dynamically exploit team driven functionalities vis a vis global total linkage redibly synthesize just in time technology rather than open-source strategic theme areas.`;
  const info = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, repellat inventore? Eaque error quas obcaecati ullam nam laboriosam impedit sit, expedita esse. In ut natus, reiciendis fugit possimus consectetur modi?"
  const review = "Good Work"
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase mt-32 md:mt-36 ">
            Shop Details
          </h1>

          <a className="text-white text-center relative cursor-pointer left-24 md:left-[680px] w-[146px] h-[10px] ">
            <a>HOME</a>/<a onClick={handleclick}>SHOP DETAILS</a>
          </a>

          <h2 className="md:w-[1153px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            Shop Details
          </h2>
        </div>
        <div className="w-screen md:flex-row flex flex-col justify-center items-center mt-20 gap-10">
          <img src={grilled} className="w-[250px] h-[320px] md:w-[600px] md:h-[620px] object-cover"/>
          <div className="w-screen md:w-[529px] h-[456px] space-y-6 flex flex-col">
            <h1 className="w-screen text-center md:text-left md:w-[468px] h-[25px] text-2xl md:text-[36px] font-semibold font-jost tracking-normal leading-[100%] ">
              Grilled Lemon Herb Chicken
            </h1>
            <div className="flex flex-col md:flex-row mt-4 items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </div>

              <p className="font-jost text-Paragraph font-normal text-base tracking-normal leading-[100%] ">
                (1 customer review)
              </p>
            </div>
            <h1 className="w-[205px] mx-auto md:mx-0 h-8 font-jost font-semibold text-[22px] tracking-normal leading-[100%] ">
              $260.00 - $360.00
            </h1>
            <p className="font-jost text-center md:text-left font-normal text-Paragraph text-base tracking-normal leading-[26px]">
              Eget taciti odio cum habitant egestas conubia turpis phasellus,
              ante parturient donec duis primis nam faucibus augue malesuada
              venenatis
            </p>
            <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-5">
              <button className="w-[164px] h-[50px] bg-black text-white font-semibold text-lg tracking-normal leading-[100%] ">
                1
              </button>
              <button className="w-[164px] h-[50px] bg-primary text-white font-semibold text-sm tracking-normal leading-[100%] ">
                Add To Cart
              </button>
            </div>
            <p className="font-jost text-center md:text-left text-Paragraph font-normal tracking-normal leading-[30px] text-base">
              SKU:17 <br />
              Categories: Light Bulb, Table <br />
              Tags: Iluminate, Textured
            </p>
          </div>
        </div>





        <div className="flex flex-col w-screen md:flex-row items-center justify-start md:ms-[178px] gap-10 mt-32 md:mt-20">
          <button
          onClick={()=>setActivetab("para")}
           className={`text-Paragraph font-semibold text-sm tracking-normal w-[200px] py-4 leading-[100%] ${
              activetab === "para"
                ? "bg-blue-600 text-white rounded-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-md"
            }`}>
            Description
          </button>
          <button
          onClick={()=>setActivetab("info")}
           className={`text-Paragraph font-semibold text-sm tracking-normal w-[200px] py-4 leading-[100%] ${
              activetab === "info"
                ? "bg-blue-600 text-white rounded-md"
                : "bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            }`}>
            Additional Information
          </button>
          <button 
          onClick={()=>setActivetab("review")}
          className={`text-Paragraph font-semibold text-sm tracking-normal w-[200px] py-4 leading-[100%] ${activetab === "review"
            ? "bg-blue-500 text-white rounded-md" : "bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300"
          }`}>
            Review (03)
          </button>
        </div>
        <div className="w-[200px] mx-auto md:mx-0 md:w-[1280px] h-[2px] border border-black md:ms-[178px] mt-2"></div>
        <div className="md:ms-[178px] text-justify px-12 md:text-left md:px-0 font-jost font-normal text-Paragraph mt-7 tracking-normal leading-[26px]">
       { activetab === "para" && (
        <>
        {para}
        </>
        
       )
       },
        { activetab === "info" && (
        <>
        {info}
        </>
        
       )
       },

        { activetab === "review" && (
        <>
        {review}
        </>
        
       )
       }

      </div>
      </div>
      <Abovefooter />
      <Footer />
    </>
  );
};
