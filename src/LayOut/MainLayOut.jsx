import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";
import { BsChatDotsFill } from "react-icons/bs";
import { useState } from "react";
import ChatKit from "./../Pages/ChatBot/ChatKit";
import Btn from "../Components/Btn";
const MainLayOut = () => {
  const [show, isShow] = useState(false);
  return (
    <div className=" overflow-hidden mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      {show && <ChatKit />}
      <div className="fixed z-10  sm:bottom-12 bottom-6 sm:right-10 right-5">
        <Btn
          onClick={() => isShow(!show)}
          className="btn w-1 h-12 rounded-full border-none bg-gradient-to-r bg-brand-color text-white hover:to-brand-color hover:bg-gradient-to-r text-center"
        >
          <BsChatDotsFill className="text-2xl  text-center -ml-3 " />
        </Btn>
      </div>
    </div>
  );
};

export default MainLayOut;
