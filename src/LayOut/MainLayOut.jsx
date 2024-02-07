import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";



const MainLayOut = () => {
   return (
      <div className="max-w-screen-2xl mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
        <Footer></Footer>
      </div>
   );
};

export default MainLayOut;