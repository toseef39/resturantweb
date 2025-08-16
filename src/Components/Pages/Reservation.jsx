import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";
import reservationbg from "../../assets/bg.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";

export const Reservation = () => {
  const navigate = useNavigate();

  const fields = [
    { label: "NUMBER OF GUEST *",
       placeholder: "person"
    },
    { label: "SELECT DATE *",
       placeholder: "person"
     },
    { label: "SELECT TIME *", 
      placeholder: "person" 
    },
    { label: "YOUR NAME *",
       placeholder: "person" 
    },
    { label: "PHONE NUMBER *",
       placeholder: "person" 
    },
    { label: "EMAIL ADDRESS*",
       placeholder: "person" 
    },
    {
      label: "Type Your Special Message*",
      placeholder: "Type Your Special Message*",
      type: "textarea",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <Topbar />
        <Navbar />

        <div className="bg-[#0A0A0ABA] py-24 w-screen h-[443px]">
          <h1 className="text-4xl md:text-[72px] font-jost font-semibold text-white text-center uppercase">
            Book A Table
          </h1>

          <div className="text-white text-center mt-4">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:underline"
            >
              HOME
            </span>{" "}
            /
            <span
              onClick={() => navigate("/reservation")}
              className="cursor-pointer hover:underline"
            >
              BOOK A TABLE
            </span>
          </div>

          <h2 className="m md:w-[1010px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            Reservation
          </h2>
        </div>

        <div className="relative w-screen md:h-[734px] h-[1034px]">
          <img
            src={reservationbg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute flex items-center justify-center">
            <form className=" md:p-8 rounded-lg md:max-w-6xl w-full">
              <div className="w-64 md:w-screen mt-6 md:mt-0 mx-auto grid grid-cols-1 ms-9 md:grid-cols-3">
                {fields.map((field, i) => (
                  <div key={i} className="flex flex-col">
                    <label className="font-bold text-base text-white mb-2">
                      {field.label}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        className="w-[250px] md:w-[1280px] h-[150px] ps-3 border border-[#FFFFFF14] bg-[#151515] text-white"
                      />
                    ) : (
                      <input
                        type={field.type || "text"}
                        placeholder={field.placeholder}
                        className="w-[250px] md:w-[413px] h-[55px] ps-3 mb-9 border border-[#FFFFFF14] bg-[#151515] text-white"
                      />
                    )}
                  </div>
                ))}
              </div>

              <button className="w-64 hidden cursor-pointer font-medium text-white uppercase md:flex justify-around items-center h-12 mt-7 mx-auto bg-primary">
                book a table
                <TfiLayoutLineSolid size={23} className="text-white" />
                <HiOutlineArrowRight size={23} className="text-white" />
              </button>
            </form>
          </div>
        </div>
        <div className="md:flex-row flex flex-col gap-36 justify-center items-center mt-10">
          <div className="w-[250px] h-[300px] md:w-[543px] md:h-[525px] bg-[#D9D9D9]">
            <div className=" hidden md:block md:w-[243px] relative top-44 left-96 border-[10px] h-[292px] bg-[#D9D9D9] "></div>
          </div>
          <div className="w-screen flex flex-col md:w-[434px] h-[385px] boder boder-[#E9E9E9]">
            <div className="flex flex-col w-screen md:w-[434px] h-[170px] ">
              <h1 className="uppercase mx-auto md:mx-0 font-bold  text-xl tracking-normal leadding-[100%]">
                Opening Hours
              </h1>
              <p className="font-normal md:text-left text-center md:px-0  px-20 text-base tracking-normal leading-[26px] font-jost text-Paragraph  ">
                Lunch: 12Pm – 3Pm <br /> Diner: 7Pm – 2Am (Last Order At
                11:30Pm)
              </p>
            </div>
            <div className="flex flex-col w-screen md:w-[434px] h-[170px] ">

            <h1 className="uppercase mx-auto md:mx-0 font-bold text-xl tracking-normal leadding-[100%]">
              Visit Hour Restaurant
            </h1>
            <p className="font-normal md:px-0 px-20 text-base tracking-normal leading-[26px] font-jost text-Paragraph  ">
              Eight avenue 487, NY, <br />
              T. +12 344 0567899 <br />
              M. fidalgo@example.com
            </p>
          </div>
            </div>

        </div>
        <Abovefooter />
        <Footer />
      </div>
    </>
  );
};
