import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayOut = () => {
   return (
      <div className="max-w-screen-2xl mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayOut;