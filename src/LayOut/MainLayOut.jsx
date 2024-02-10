import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";
import { BiSolidMessageDetail } from "react-icons/bi";
import { useState } from "react";
const MainLayOut = () => {
  const [show, isShow] = useState(false)
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* <div className="fixed z-10  sm:bottom-12 bottom-6 sm:right-10 right-5">
        <button onClick={()=>isShow(!show)} className="btn w-14 h-14 rounded-full border-none bg-gradient-to-r from-brand-color to-green-400 text-white hover:from-green-400 hover:to-brand-color hover:bg-gradient-to-r">
          <BiSolidMessageDetail className="sm:text-2xl text-xl" />
        </button>
      </div> */}
    </div>
  );
};

export default MainLayOut;
