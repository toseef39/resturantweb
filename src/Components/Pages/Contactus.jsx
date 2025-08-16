import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";

export const Contactus = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col ">
        <Topbar />
        <Navbar />
        <div className="bg-[#0A0A0ABA] w-screen h-[427px]">
          <h1 className="text-4xl md:text-7xl text-white font-jost font-semibold tracking-normal leading-[100%] text-center uppercase  mt-36 ">
            contact Us
          </h1>

          <a className="text-white text-center relative cursor-pointer left-24 md:left-[680px] w-[146px] h-[10px] ">
            HOME/CONTACT US
          </a>

          <h2 className=" md:w-[1010px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            get in touch
          </h2>
        </div>
        <div className="w-screen h-[813px] md:bg-[#D9D9D9]">
          <div className="w-screen md:w-[519px] h-[573px] md:ms-80 mt-36 py-14 gap-y-4 bg-[#FFFFFF]">
            <h1 className="font-jost font-bold text-2xl leading-[100%] tracking-normal ms-14  ">
              Office Information
            </h1>
            <p className="font-jost text-Paragraph mt-2 text-base font-bold tracking-normal px-14 leading-[26px]">
              Completely recapitalize 24/7 communities via standards compliant
              metrics whereas.
            </p>
            <div className="text-center flex flex-col">
              <div className="flex mx-auto md:mx-0 px-5 md:px-0 items-center md:gap-4 md:ms-14 mt-11 ">
                <div className="w-[60px]  h-[60px]">
                  <FaPhoneAlt className="mx-auto" size={28} color="red" />
                </div>
                <div>
                  <h1 className="font-jost w-[187px] h-[26px] font-medium  text-base text-center md:text-left md:text-lg tracking-normal leading-[100%]">
                    Phone Number & Email
                  </h1>
                  <div className="w-[210px] h-[52px]">
                    <p className="font-jost text-Paragraph text-sm md:text-base tracking-normal text-center leading-[26px]">
                      +(310) 2591 21563
                    </p>
                    <a className="font-jost text-Paragraph text-sm md:text-base tracking-normal text-center leading-[26px]">
                      help-delish@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex px-5  mx-auto md:mx-0 md:px-0 md:gap-4 items-center md:ms-14 mt-11 ">
                <div className="w-[60px] h-[60px]">
                  <IoLocationSharp className="mx-auto" size={28} color="red" />
                </div>
                <div>
                  <h1 className="font-jost font-medium text-base text-center md:text-left md:text-lg tracking-normal leading-[100%]">
                    Our Office Address
                  </h1>
                  <div className="w-[210px] h-[52px]">
                    <p className="font-jost text-Paragraph text-sm md:text-base tracking-normal text-center leading-[26px]">
                      258 Dancing Street, Miland Line,HUYI 21563, NewYork
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex mx-auto md:mx-0 px-5 md:px-0 md:gap-4 items-center md:ms-14 mt-11 ">
                <div className="w-[60px] h-[60px]">
                  <IoTimeSharp className="mx-auto" size={28} color="red" />
                </div>
                <div>
                  <h1 className="font-jost font-medium text-base text-center md:text-left md:text-lg tracking-normal leading-[100%]">
                    Official Work Time
                  </h1>
                  <div className="w-[210px] h-[52px]">
                    <p className="font-jost text-Paragraph text-sm md:text-base tracking-normal text-center leading-[20px]">
                      7:00am - 6:00pm (Mon - Fri) Sat, Sun &{" "}
                      <span className="text-primary">Holiday Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="w-screen md:w-[1280px] mx-auto h-[685px] mt-20">
          <h1 className="font-bold text-[36px] font-jost tracking-normal leading-auto text-center ">
            Leave a Message
          </h1>
          <p className="text-Paragraph text-base w-screen px-2 text-justify md:w-[658px] h-[34px] tracking-normal mx-auto font-normal leading-[30px] md:text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit curae quis
            libero erat, justo in habitasse aliquet mi. Condimentum inceptos
            euismod eu nunc ad nisl fermentum erat
          </p>
          <div className="flex flex-col flex-wrap md:justify-center mt-40 md:mt-20 gap-y-5 items-center">
            <div className="md:flex-row flex flex-col md:justify-center gap-4">
              <input
                className="w-[300px] md:w-[530px] h-[55px] border text-center outline-none border-[#EAEAEA]"
                placeholder="Your Name"
                type="text"
                name="name"
              />

              <input
                className="w-[300px] md:w-[530px] h-[55px] border text-center outline-none border-[#EAEAEA]"
                placeholder="Email"
                type="text"
                name="email"
              />
            </div>
            <input
              type="text"
              placeholder="Select subject"
              name="select subject"
              className="w-[300px] md:w-[1079px] border outline-none text-center md:text-left md:px-6  border-[#EAEAEA] h-[55px]"
            />
            <input
              type="text"
              placeholder="Select subject"
              name="Type your message"
              className="w-[300px] md:w-[1079px] uppercase border outline-none text-center md:text-left md:px-6   border-[#EAEAEA] h-[135px]"
            />
          </div>
          <button className="bg-primary w-[250px] md:w-[765px] h-[55px] mt-10 ms-10 md:ms-28 text-sm tracking-normal leading-[100%] text-white font-semibold">
            Submit
          </button>
        </div>

        <Abovefooter />
        <Footer />
      </div>
    </>
  );
};
