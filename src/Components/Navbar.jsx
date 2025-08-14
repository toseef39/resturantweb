import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/reservation");
  };

  const navlinks = [
    { title: "Home", links: "/" },
    { title: "Team", links: "/team" },
    { title: "About us", links: "/Aboutus" },
    { title: "Menu", links: "/Menu" },
    { title: "Shop", links: "/shop" },
    { title: "Blog", links: "/blog" },
    { title: "Contact", links: "/Contact" },
  ];

  return (
    <div className="w-screen flex flex-wrap justify-around py-4 bg-Secondary items-center">
      <div className="md:flex">
        <img
          className="w-[165.83px] h-12 ms-6"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="md:flex hidden gap-3 font-medium">
        {navlinks.map((item, i) => (
          <Link
            key={i}
            to={item.links}
            className="text-white text-sm uppercase"
          >
            {item.title}
          </Link>
        ))}
      </div>

    
      <button
        onClick={handleReservation}
        className="w-64 hidden cursor-pointer font-medium text-white uppercase md:flex justify-around items-center h-12 border border-primary"
      >
        book a table
        <TfiLayoutLineSolid size={23} className="text-red-600" />
        <HiOutlineArrowRight size={23} className="text-red-600" />
      </button>


      

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white">
        <IoMdMenu
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
          size={30}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-screen absolute top-0 py-6 h-screen bg-white z-50">
          <RxCross2
            onClick={() => setIsOpen(false)}
            size={24}
            className="float-right cursor-pointer mr-4"
          />

          <div className="flex flex-col ms-6 gap-3 font-medium mt-10">
            {navlinks.map((item, i) => (
              <Link
                key={i}
                to={item.links}
                className="text-black text-sm uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <button
            onClick={handleReservation}
            className="w-64 mt-6 cursor-pointer uppercase font-medium flex justify-around items-center h-12 border border-primary mx-auto"
          >
            book a table
            <TfiLayoutLineSolid size={23} className="text-red-600" />
            <HiOutlineArrowRight size={23} className="text-red-600" />
          </button>
        </div>
      )}
    </div>
  );
};
