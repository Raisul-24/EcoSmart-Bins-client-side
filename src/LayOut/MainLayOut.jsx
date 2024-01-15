import { Outlet } from "react-router-dom";


const MainLayOut = () => {
   return (
      <div className="max-w-screen-2xl mx-auto">
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayOut;