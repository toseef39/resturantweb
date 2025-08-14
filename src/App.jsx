import React from "react";
import { Topbar } from "./Components/Topbar";
import { Navbar } from "./Components/Navbar";
import { Herosection } from "./Components/Herosection";
import { Route, Routes } from "react-router-dom";
import { Aboutsus } from "./Components/Pages/Aboutsus";
import { Contactus } from "./Components/Pages/Contactus";
import { Chefteam } from "./Components/Pages/Chefteam";
import { Reservation } from "./Components/Pages/Reservation";
import { Chefdetail } from "./Components/Pages/Chefdetail";
import { Gllarypage } from "./Components/Pages/Gllarypage";
import { CgHeadset } from "react-icons/cg";
import { Blogs } from "./Components/Blogs";
import { Blog } from "./Components/Pages/Blog";
import {Shoppage} from "./Components/Pages/Shoppage"
import { Shopdetails } from "./Components/Pages/Shopdetails";
import { Menu } from "./Components/Pages/Menu";
import { Detailblog } from "./Components/Pages/Detailblog";

function App() {
  return (
    <>
      
     <Routes>

      <Route path="/" element={<Herosection/>} />
      <Route path="/Aboutus" element={<Aboutsus/>} />
      <Route path="/Contact" element={<Contactus/>} />
      <Route path="/team" element={<Chefteam/>} />
      <Route path="/chefdetails" element={<Chefdetail/>} />
      <Route path="/reservation" element={<Reservation/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/detailblog" element={<Detailblog/>} />
      <Route path="/shop" element={<Shoppage/>} />
      <Route path="/shopdetail" element={<Shopdetails/>} />
      <Route path="/Menu" element={<Menu/>} />
      <Route path="/gallery" element={<Gllarypage/>} />
     </Routes>

     {/* <Herosection/> */}
    </>
  );
}

export default App;
