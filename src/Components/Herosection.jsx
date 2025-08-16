import React from "react";
import gobi from "../assets/gobi.png";
import burger from "../assets/burger.png";
import { FaPhoneVolume } from "react-icons/fa6";
import vertical from "../assets/vertical.png";
import dot from "../assets/dot.png";
import flower from "../assets/flower.png";
import imgg from "../assets/imgg.png";
import bg from "../assets/bg.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { Testimonials } from "./Testimonials";
import { Booktable } from "./Booktable";
import { Team } from "./Team";
import { Blogs } from "./Blogs";
import { Abovefooter } from "./Abovefooter";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import slider from "../assets/slider.png"
import welcome from ".././assets/welcom.jpg"
import wedding from ".././assets/wedding.jpg"
import buffet from ".././assets/buffet.jpg"
import party from ".././assets/party.jpg"
import rost from ".././assets/rost.jpg"
import salad from ".././assets/salad.jpg"
import masala from ".././assets/masala.jpg"
import pasta from ".././assets/pasta.jpg"
import veg from ".././assets/veg.jpg"
import cake from ".././assets/cake.jpg"
import gallery1 from "../assets/gallery1.webp"
import gallery2 from "../assets/gallery2.jpg"
import gallery3 from "../assets/gallery3.jpg"
import gallery4 from "../assets/gallery4.jpg"
import gallery5 from "../assets/gallery5.jpg"
import gallery6 from "../assets/gallery6.jpg"

export const Herosection = () => {
  const navigate = useNavigate()

  const handlenavigate = ()=>{
navigate("/gallery")
  };
  const serivcesboxes = [
    {
      img: wedding,
      headings: "WEDDING SERVICES",
      para: "The chocolate fondant which did not disappoint It was rich and indulgent, with a gooey center that was pure bliss.",
      btn: "Read More",
    },
    {
      img: buffet,
      headings: "Buffet Service",
      para: "Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks bliss blisss.",
      btn: "Read More",
    },
    {
      img: party,
      headings: "Party Service",
      para: "Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks blisss bliss.",
      btn: "Read More",
    },
  ];

  const foodmenu = [
    {
      headings: "Braised Short Ribs",
      para: "Non nisi est sit amet facilisis magna",
      btn: "$15.00",
    },
    {
      img: rost,
      headings: "Roasted Vegetable Platter",
      para: "Non nisi est sit amet facilisis magna",
      btn: "$15.00",
    },
    {
      headings: "Classic Caesar Salad",
      para: "Non nisi est sit amet facilisis magna",
      btn: "$15.00",
    },
    {
      headings: "Szechuan Beef Stir-Fry",
      para: "Non nisi est sit amet facilisis magna",
      btn: "$15.00",
    },
    {
      headings: "Vegan Buddha Bowl",
      para: "Non nisi est sit amet facilisis magna",
      btn: "$15.00",
    },
    {
      img: "",
      headings: "Vegan Buddha Bowl",
      para: "Non nisi est sit amet facilisis magna",
      btn: "$15.00",
    },
  ];

  const foodlist = [
    {
      img: salad,
      star: <CiStar color="#CB3A1A" />,
      heading: "Classic Caesar Salad",
      price: "$15.00",
    },
    {
      img: rost,
      star: <CiStar color="#CB3A1A" />,
      heading: "Braised Short Ribs",
      price: "$15.00",
    },
    {
      img: masala,
      star: <CiStar color="#CB3A1A" />,
      heading: "Chicken Masala",
      price: "$15.00",
    },
    {
      img: pasta,
      star: <CiStar color="#CB3A1A" />,
      heading: "Chicken Alfredo Pasta",
      price: "$15.00",
    },
    {
      img: veg,
      star: <CiStar color="#CB3A1A" />,
      heading: "Vegan Buddha Bowl",
      price: "$15.00",
    },
    {
      img: cake,
      star: <CiStar color="#CB3A1A" />,
      heading: "Chocolate Lava Cake",
      price: "$15.00",
    },
  ];

  const renderStars = () => {
    return (
      <>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>⭐</span>
        ))}
      </>
    );
  };

  return (
    <div className="overflow-hidden">
      {/* slider  */}
        <Topbar />
        <Navbar />
        <img className="w-screen h-[280px]  object-cover md:h-[650px] " src={slider} alt="" />
      
      {/* home 2  */}
      <div className="md:w-full md:h-[550px] md:flex-row flex flex-col items-center gap-10 mt-0 md:mt-6">
        <div className="md:[w-234px] md:block hidden md:h-[234px] md:relative md:bottom-24">
          <img src={gobi} alt="" />
        </div>
        <img src={welcome} className=" w-[300px] h-[300px] md:w-[370px] md:h-[393px] object-fill mt-20"/>
        <div className="w-screen h-[470px] md:w-[592px] md:h-[359px] ">
          <div className="w-[160px] md:w-[170px] h-8 mx-auto md:ms-0 bg-primary mt-10 rounded-md  py-[6px] md:gap-[10px] md:px-4">
            <p className="text-white font-semibold text-sm uppercase text-center">
              make reservation
            </p>
          </div>
          <h1 className="font-bold mt-5 text-2xl text-center md:text-left md:text-[40px] tracking-normal w-[300px] md:w-[430px] h-[78px] leading-[50px]">
            Welcome To Our <br /> Luxury Restaurant
          </h1>
          <p className="px-4 md:px-0 text-justify mt-14 text-Paragraph font-normal text-lg leading-7 tracking-normal">
            The scallops were perfectly cooked, tender, and flavorful, paired
            beautifully with a creamy risotto and seasonal vegetables. The
            presentation was artful, showcasing the chef's attention to detail.
          </p>

          {/* 2nd  */}
          <div className="flex items-center mx-auto md:mx-0 mt-10 gap-2 w-[230px] h-[50px]">
            <div className="flex w-80 items-center gap-2 ">
              <div className="w-[50px] h-[50px] bg-primary text-white mt-2 rounded-full">
                <FaPhoneVolume className="text-center mx-auto mt-5" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-Paragraph font-medium text-sm tracking-normal uppercase py-2 leading-[100%]">
                  Hotline 24/7
                </h1>
                <h5 className="text-black font-bold text-xl leading-[100%]">
                  +256 3254-2568
                </h5>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* Our Services */}
        <div className="hidden md:block md:[w-262px] md:h-[220px] relative bottom-24 right-0">
          <img src={burger} alt="" />
        </div>
      </div>
      <div>
        {/* section 3  */}
        <div className="w-screen h-[360px] mt-24 md:mt-28">
          <div className=" flex flex-col md:justify-center items-center gap-[10px] mt-6 ">
            <div className="w-[132px] bg-primary h-8 rounded-md py-[8px] px-4 ">
              <p className="uppercase font-semibold text-sm tracking-normal leading-[100%] text-white">
                Our Services
              </p>
            </div>
            <div className="w-[541px] h-[50px] ">
              <h1 className="font-bold tracking-normal leading-[100%] text-2xl md:text-none text-center md:text-[40px]">
                Our Restaurant Service
              </h1>
            </div>

            <div>
              <img src={vertical} alt="" />
            </div>
            <div>
              <img className="h-[8.49px] w-[47.49px]" src={dot} alt="" />
            </div>
          </div>
          <div className="md:w-[225px] md:block hidden md:h-[204px] float-end relative bottom-44 right-6 ">
            <img src={flower} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-col flex justify-center items-center md:flex-row md:mx-28 md:justify-around">
        <div className=" md:block hidden w-[154px] h-[121px] relative top-20">
          <img src={imgg} alt="" />
        </div>
        {serivcesboxes.map((items, id) => (
          <div
            key={id}
            className="flex  flex-col w-[260px] md:w-[410px] h-[540px] gap-2 space-y-4"
          >
            <div className="w-[250px] md:w-[340px] h-[250px] bg-[#D9D9D9]">
            <img src={items.img} alt={items.headings} className="w-full h-full object-cover" />
            </div>
            <div className="font-bold  text-center md:text-left text-lg md:text-2xl leading-[100%] tracking-normal">
              {items.headings}
            </div>
            <div className=" font-jost text-justify md:text-left text-base text-Paragraph leading-[26px] tracking-normal">
              {items.para}
            </div>
            <div className="text-primary mx-auto md:mx-0 gap-2 border border-primary h-[45px] w-[192px] flex items-center justify-center">
              {items.btn}
              <TfiLayoutLineSolid size={23} className="text-primary" />
              <HiOutlineArrowRight size={20} className="text-primary" />
            </div>
          </div>
        ))}
      </div>

      {/* food menu */}

      <div className="w-screen md:w-[1279px] h-[988px] md:mx-52 mt-14">
        <div className="flex justify-between items-center">
          <div className="w-screen flex flex-col gap-[6px]">
            <div className="w-36 mx-auto md:mx-0  text-center md:w-[118px]  bg-primary h-6 md:h-8 rounded-md  md:py-[5px] md:px-4 ">
              <p className="uppercase font-semibold text-sm py-1 tracking-normal leading-[100%] text-white">
                food menu
              </p>
            </div>
            <div className="w-screen md:w-[541px] h-[50px] ">
              <h1 className="font-bold text-2xl text-center md:text-left tracking-normal leading-[100%] md:text-[40px]">
                Our Delicious Foods
              </h1>
            </div>
          </div>
          <ul className="hidden md:flex gap-4 cursor-pointer uppercase font-semibold font-jost tracking-normal text-sm leading-[100%]">
            <li className="w-[130px] h-[45px] hover:border hover:border-primary hover:text-primary py-4 px-2">
              All food
            </li>
            <li className="w-[100px] h-[45px] hover:border hover:border-primary hover:text-primary py-4 px-2">
              breakfast
            </li>
            <li className="w-[105px] h-[45px] hover:border hover:border-primary hover:text-primary py-4 px-2">
              launch
            </li>
            <li className="w-[120px] h-[45px] hover:border hover:border-primary hover:text-primary py-4 px-2">
              dinner
            </li>
          </ul>
        </div>

        <div className=" flex flex-col justify-center items-center md:items-start md:flex-row gap-6 mt-20">
          {/* Div 1 */}
          <div className="md:block hidden w-[210px] md:w-[411px]">
            <img src={rost} className="w-[240px] md:w-[411px] h-[260px] bg-[#D9D9D9]"/>
            {foodmenu.map((items, id) => (
              <div
                key={id}
                className="flex-1 flex-col space-y-3 w-[351px] h-[71px]"
              >
                <div className="md:flex-row flex flex-col mt-6 md:mt-0 justify-between w-[351px] h-[71px] md:items-center">
                  <div className="flex flex-col font-semibold text-xl font-jost w-[234px] h-[29px] leading-[100%] tracking-normal">
                    {items.headings}
                    <div className=" font-jost font-normal text-sm  text-Paragraph leading-[26px] tracking-normal">
                      {items.para}
                    </div>
                  </div>
                  <div className="text-primary font-semibold h-[23px] w-[54px] flex items-center justify-center">
                    {items.btn}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Div 2 */}
          <div className="flex flex-col md:flex-wrap md:flex-row w-screen md:w-[845px] h-[780px] gap-x-3 gap-y-4">
            {foodlist.map((items, id) => (
              <div
                key={id}
                className="flex flex-col mx-auto md:mx-0 items-center justify-center w-[261px] h-[392px] space-y-3"
              >
                <div className="bg-[#D9D9D9] h-[261px] w-[260px] flex items-center justify-center">
                  <img className="h-[261px] w-[260px] " src={items.img} alt="" />
                </div>
                <div className="w-[84px] flex h-[10px] text-sm text-center font-black leading-[100%] tracking-normal">
                  {renderStars()}
                </div>
                <div className="font-semibold text-xl font-jost w-[200px] text-center h-[14px] leading-[100%] tracking-normal">
                  {items.heading}
                </div>
                <div className="text-primary font-semibold text-sm h-[20px] w-[47px] flex items-center justify-center">
                  {items.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonial */}

      <div className="w-screen md:block hidden md:w-full h-[475px]">
        <img
          src={bg}
          className="w-screen object-cover absolute h-[475px]"
          alt=""
        />
        <div className="md:flex-row flex flex-col justify-between items-center  md:justify-around mx-auto relative top-16 w-screen md:w-[1280px] h-[172px]">
          <div className="flex gap-2 md:gap-1 justify-center items-center">
            <p className="text-white font-bold text-3xl md:text-7xl tracking-normal leading-[100%] font-jost">
              15
            </p>
            <p className="flex text-white font-jost font-semibold text-sm md:text-base tracking-normal leading-[24px]">
              New <br /> Cool Projects
            </p>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0 md:gap-1 justify-center items-center">
            <p className="text-white font-bold text-3xl md:text-7xl tracking-normal leading-[100%] font-jost">
              15
            </p>
            <p className="flex text-white uppercase font-jost font-semibold text-sm md:text-base tracking-normal leading-[24px]">
              total <br /> award win
            </p>
          </div>
          <div className="flex mt-2 md:mt-0 gap-2 md:gap-1 justify-center items-center">
            <p className="text-white font-bold text-3xl md:text-7xl tracking-normal leading-[100%] font-jost">
              20
            </p>
            <p className="flex text-white uppercase font-jost font-semibold text-sm md:text-base tracking-normal leading-[24px]">
              unique <br /> food specialiests
            </p>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0 md:gap-1 justify-center items-center">
            <p className="text-white font-bold text-3xl md:text-7xl tracking-normal leading-[100%] font-jost">
              69
            </p>
            <p className="flex text-white uppercase font-jost font-semibold text-sm md:text-base tracking-normal leading-[24px]">
              hard <br /> team member
            </p>
          </div>
        </div>

        <div className="md:block hidden w-[1280px] h-[2px] mt-20 border border-[#272624] mx-auto relative"></div>

        <div className="relative top-[1500px] md:top-0">
          <div className="w-[1279px] h-[988px] mx-52 mt-14">
            <div className="flex justify-between items-center">
              <div className=" flex flex-col gap-[6px]">
                <div className="w-[173px] bg-primary h-8 rounded-md py-[6px] text-center ">
                  <p className="uppercase font-semibold text-sm tracking-normal leading-[100%] text-white">
                    view food projects
                  </p>
                  <div></div>
                </div>
                <div className="relative w-screen h-[540px] ">
                  <h1 className="font-bold text-white tracking-norma leading-[100%] text-[40px]">
                    Our Foods gallery
                  </h1>
                  {/* </div> */}
                  <div className="flex relative right-11 mt-8 flex-wrap gap-4">
                 <div
                  style={{ backgroundImage: `url(${gallery4})` }}
                   onClick={handlenavigate} className="relative bg-cover bg-center bg-no-repeat w-[250px] h-[287px] bg-[#D9D9D9] hover:bg-primary group">
                      <div className="absolute top-28 left-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MdOutlineRemoveRedEye
                          size={40}
                          color="red"
                          className="bg-white px-1 rounded"
                        />
                      </div>
                    </div>
                    <div
                     style={{ backgroundImage: `url(${gallery3})` }}
                      onClick={handlenavigate} className="relative bg-cover bg-center bg-no-repeat w-[250px] h-[287px] bg-[#D9D9D9] hover:bg-primary group">
                      <div className="absolute top-28 left-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MdOutlineRemoveRedEye
                          size={40}
                          color="red"
                          className="bg-white px-1 rounded"
                        />
                      </div>
                    </div>
                    <div 
                     style={{ backgroundImage: `url(${gallery2})` }}
                     onClick={handlenavigate} className="relative bg-cover bg-center bg-no-repeat w-[250px] h-[287px] bg-[#D9D9D9] hover:bg-primary group">
                      <div className="absolute top-28 left-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MdOutlineRemoveRedEye
                          size={40}
                          color="red"
                          className="bg-white px-1 rounded"
                        />
                      </div>
                    </div>
                   <div
                   style={{ backgroundImage: `url(${gallery1})` }}
                    onClick={handlenavigate} className="relative bg-cover bg-center bg-no-repeat w-[250px] h-[287px] bg-[#D9D9D9] hover:bg-primary group">
                      <div className="absolute top-28 left-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MdOutlineRemoveRedEye
                          size={40}
                          color="red"
                          className="bg-white px-1 rounded"
                        />
                      </div>
                    </div>
                    <div
                    style={{backgroundImage:`url(${gallery6})`}}
                     onClick={handlenavigate} className="relative bg-cover bg-center bg-no-repeat w-[250px] h-[287px] bg-[#D9D9D9] hover:bg-primary group">
                      <div className="absolute top-28 left-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MdOutlineRemoveRedEye
                          size={40}
                          color="red"
                          className="bg-white px-1 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Booktable />
      <Team />
      <Blogs />
      <Abovefooter />
      <Footer />
    </div>
  );
};
