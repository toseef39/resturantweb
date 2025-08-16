import React from "react";
import { Topbar } from "../Topbar";
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { PiGreaterThanThin } from "react-icons/pi";
import { Abovefooter } from "../Abovefooter";
import { Footer } from "../Footer";
import { FaArrowRight } from "react-icons/fa6";
import { Sidebar } from "./Sidebar";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { BsArrow90DegLeft } from "react-icons/bs";
import blogpic from "../../assets/blogpic.png"
import phela from "../../assets/phela.jpg"
import dusra from "../../assets/dusra.jfif"
import thisra from "../../assets/thisra.jfif"
import willi from "../../assets/ceo.jfif"
import willi1 from "../../assets/mark.jfif"
import willi2 from "../../assets/ceo1.jfif"
import willi3 from "../../assets/ceo22.jfif"

export const Detailblog = () => {
  const navigate = useNavigate();
  const handlenavigation = () => {
    navigate("/blog");
  };

  const comments = [
    {
      img: willi1,
      date: "10 Mar, 2022",
      name: "Daniel Adam",
      response: "Reply",
      comment:
        "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
    },
    {
      img: willi2,
      date: "10 Mar, 2022",
      name: "Zenelia Lozhe",
      response: "Reply",
      comment:
        "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
    },
    {
      img: willi3,
      date: "10 Mar, 2022",
      name: "Jhon Smith",
      response: "Reply",
      comment:
        "Collaboratively empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.",
    },
  ];
  const blogsdetails = [
    {
      img: "",
      btn2: "Foodies",
      comments: "by admin",
      date: "24 Feb, 2024",
      heading: "the World of Food and Wine Matching",
      para: ` Global business consultancies play a critical role in driving thought leadership and knowledge exchange on a global scale. Through industry reports, white papers, seminars, and conferences, these firms share insights, best practices, and emerging trends that shape the future of international business. By staying at the forefront of global trends and innovations, the consultancy provides clients with invaluable intelligence and foresight, empowering them to anticipate market shifts, capitalize on emerging opportunities, and stay ahead of the curve in an ever-changing global landscape.`,
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
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </a>
            /<a onClick={handlenavigation}>BLOGS </a>
          </a>

          <h2 className="md:w-[1153px] h-[98px] text-outline mx-auto mt-9 text-border border-[#FFFFFF33] shadow-[15px] text-[#FFFFFF03] font-jost font-bold text-[40px] text-center  md:text-[140px] tracking-normal leading-[100%]  uppercase">
            News Insights
          </h2>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col w-screen md:w-[829px] h-[732px] mt-10 mb-[4160px] md:mb-[2670px] space-y-3">
            {blogsdetails.map((items, id) => (
              <>
                <div key={id} className="flex flex-col space-y-4">
                  {/* <div className="w-[300px] mx-auto md:mx-0 h-[250px] md:w-[829px] md:h-[450px] bg-[#D9D9D9]"> */}
                    
                    <img src={blogpic} className="w-[300px] bg-cover mx-auto md:mx-0 h-[250px] md:w-[829px] md:h-[450px]" alt="" />
                  {/* </div> */}
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
                  <div className="flex flex-col space-y-4 md:space-y-36">
                    <p className="font-jost w-screen md:w-[749px] md:h-[38px] text-justify md:text-left px-10 md:px-0 text-Paragraph font-normal md:text-base tracking-normal leading-[26px] ">
                      {items.para}
                    </p>
                    <p className="font-jost w-screen md:w-[749px] md:h-[38px] text-justify md:text-left px-10 md:px-0 text-Paragraph font-normal  md:text-base tracking-normal leading-[26px] ">
                      {" "}
                      global business consultancy serves as a strategic partner
                      and trusted advisor to organizations navigating the
                      complexities of international commerce. By offering a
                      comprehensive suite of services, deep industry expertise,
                      and a global network of resources, these firms empower
                      clients to seize opportunities.`,
                    </p>
                    <div className="w-screen md:w-[845px] h-[353px] flex flex-col px-14 space-y-5 mt-36">
                      <div className="w-[50px] mx-auto md:mx-0 md:w-[80px] h-[80px] rounded-full bg-primary  md:mt-10">
                        <p className="text-white font-light text-[40px] tracking-normal leading-[30px] text-center py-5">
                          99
                        </p>
                      </div>

                      <h1 className="font-jost text-center md:text-left font-medium text-base md:text-2xl tracking-normal leading-[32px]  ">
                        “We offer competitive pricing and deliver exceptional
                        value for your investment our goal is to help you
                        achieve the highest”
                      </h1>
                      <h1 className="font-semibold text-center md:text-left font-jost text-lg text-primary tracking-normal leading-[100%]">
                        William Benjamin
                      </h1>
                      <p className="text-Paragraph text-center md:text-left  text-base tracking-normal leading-[100%] ">
                        Top Author
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-jost w-screen mb-20 md:w-[749px] md:h-[38px] text-justify md:text-left px-10 md:px-0 text-Paragraph font-normal  md:text-base tracking-normal leading-[26px] ">
                      Professionally pursue cutting-edge web-readiness vis-a-vis
                      just in time infrastructures. Conveniently target
                      client-based systems with turnkey sources. Collaboratively
                      syndicate focused opportunities for interactive
                      deliverables. Assertively initiate client-based
                      infomediaries through collaborative mindshare. Completely
                      create bleeding-edge meta-services through compelling
                      functionalities.
                    </p>
                  </div>
                  <div
                    key={id}
                    className="flex flex-col md:flex-row w-[250px] gap-3 mx-auto h-[600px] md:w-[845px] md:h-[353px]"
                  >
                    <img className=" w-[250px] md:w-[275px] bg-cover h-[350px]" src={phela} alt="" />
                    <img className=" w-[250px] md:w-[275px] bg-cover h-[350px]" src={dusra} alt="" />
                    <img className=" w-[250px] md:w-[275px] bg-cover h-[350px]" src={thisra} alt="" />
                  </div>
                  <div>
                    <p className="font-jost w-screen mb-14 md:w-[749px] md:h-[38px] text-justify md:text-left px-10 md:px-0 text-Paragraph font-normal  md:text-base tracking-normal leading-[26px] ">
                      Quickly build covalent data after turnkey content.
                      Distinctively reconceptualize customized growth strategies
                      via prospective potentialities. Professionally pursue
                      cutting-edge web-readiness vis-a-vis just in time
                      infrastructures. Conveniently target client-based systems
                      with turnkey sources.
                    </p>
                    <p className="font-jost w-screen mb-44 md:mb-14 md:w-[749px] md:h-[38px] text-justify md:text-left px-10 md:px-0 text-Paragraph font-normal  md:text-base tracking-normal leading-[26px] ">
                      Collaboratively syndicate focused opportunities for
                      interactive deliverables. Assertively initiate
                      client-based infomediaries through collaborative mindshare
                      create bleeding-edge meta-services
                    </p>
                  </div>
                  <div className="w-[845px] h-[12px] md:flex hidden items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <h1 className="font-jost font-semibold tracking-normal text-base leading-[100%]">
                        Tags
                      </h1>
                      <p className="font-jost text-Paragraph uppercase text-base font-normal tracking-normal leading-[100%] ">
                        Business solution,
                      </p>
                      <p className="font-jost text-Paragraph uppercase text-base font-normal tracking-normal leading-[100%] ">
                        Growth strength
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <h1 className="font-jost font-semibold tracking-normal text-base leading-[100%]">
                        social icon
                      </h1>
                      <ImFacebook className="text-Paragraph" />
                      <FaTwitter className="text-Paragraph" />
                      <FaInstagram className="text-Paragraph" />
                      <TbWorld className="text-Paragraph" />
                    </div>
                  </div>

                  <div className=" md:w-[845px] h-[142px] items-center md:flex hidden justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[80px] h-[80px] bg-[#D9D9D9]"
                        src=""
                        alt=""
                      />
                      <h1 className="uppercase tracking-normal leading-[100%] text-base font-jost font-semibold ">
                        previous post
                      </h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="uppercase tracking-normal leading-[100%] text-base font-jost font-semibold ">
                        next post
                      </h1>
                      <img
                        className="w-[80px] h-[80px] bg-[#D9D9D9]"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="w-screen md:w-[845px]  h-[249px] md:flex-row flex flex-col mb-44 md:mb-0 justify-center items-center gap-10">
                    <img
                      className="min-w-[189px] min-h-[189px] bg-[#E3E3E3] "
                      src={willi}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h1 className="text-2xl text-center md:text-left font-semibold font-jost tracking-normal leading-[100%] ">
                        William Benjamin
                      </h1>
                      <h2 className="text-primary text-center md:text-left font-jost font-normal leading-[26px] tracking-normal text-base">
                        Author
                      </h2>
                      <p className="text-Paragraph text-center md:text-left font-jost font-normal leading-[26px] tracking-normal text-base ">
                        Re-engineer multimedia based internal or "organic"
                        sources for progressive vortals. Assertively leverage
                        existing economically sound total linkage whereas global
                        best practices.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="h-12"></div>
                  <div className="w-full md:w-[845px] mt-44 p-5 md:p-8">
                    <h1 className="font-jost font-semibold text-2xl md:text-3xl tracking-normal leading-[36px]">
                      3 Comments
                    </h1>

                    <div className="flex flex-col mt-10 space-y-9">
                      {comments.map((items, id) => (
                        <div
                          key={id}
                          className="flex flex-col md:flex-row gap-5 md:items-start items-center text-center md:text-left"
                        >
                          
                          <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] bg-[#E3E3E3] flex-shrink-0">
                          
                            <img src={items.img} className="w-[80px] h-[80px] md:w-[110px] md:h-[110px]" alt="" />
                          </div>

                     
                          <div className="w-full flex flex-col space-y-2">
                            <div className="font-jost font-normal text-sm text-Paragraph">
                              {items.date}
                            </div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                              <div className="font-jost font-semibold text-lg md:text-xl tracking-normal leading-[20px]">
                                {items.name}
                              </div>
                              <div className="font-jost flex gap-2 mx-auto md:mx-0 relative top-28 left-32 md:left-0 md:top-0 items-center md:font-medium text-sm md:text-base text-primary tracking-normal leading-[16px]">
                                {items.response}
                                <BsArrow90DegLeft className="mx-auto"/>
                              </div>
                            </div>

                            <p className="text-Paragraph text-sm md:text-base font-normal tracking-normal leading-[26px] font-jost">
                              {items.comment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-12"></div>

                {/* form  */}

                <div className="w-screen md:w-[845px] mx-auto h-[432px]">
                  <h1 className="font-semibold text-[30px] text-center md:text-left font-jost tracking-normal leading-[36px]  ">
                    Leave a Reply
                  </h1>
                  <div className="flex flex-col mx-auto md:mx-0 flex-wrap md:justify-center mt-10 gap-y-5 items-center">
                    <div className=" md:flex-row flex flex-col md:justify-center gap-4">
                      <input
                        className="w-[250px] md:w-[372px] h-[55px] border text-center outline-none border-[#EAEAEA]"
                        placeholder="Your Name"
                        type="text"
                        name="name"
                      />

                      <input
                        className="w-[250px] md:w-[372px] h-[55px] border text-center outline-none border-[#EAEAEA]"
                        placeholder="Email"
                        type="text"
                        name="email"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Select subject"
                      name="Type your message"
                      className="w-[250px] md:w-[765px] uppercase border outline-none md:px-6 border-[#EAEAEA] h-[150px]"
                    />
                  </div>
                    <button className="bg-primary w-[250px] mt-3 ms-10 md:w-[765px] h-[55px] text-sm tracking-normal leading-[100%] text-white font-semibold">
                      Submit Comment
                    </button>
                </div>
              </>
            ))}
          </div>
          <Sidebar />
        </div>
      </div>
      <Abovefooter />
      <Footer />
    </>
  );
};
