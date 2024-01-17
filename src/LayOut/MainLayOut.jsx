import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";


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