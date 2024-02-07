import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import useAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const handleLogOut = async () => {
    try {
      logOut();
      toast.success("Log Out Successfully!!");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const navLinks = (
    <>
      <li className="text-xl hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/"}>Home </NavLink>
      </li>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="text-xl hover:text-brand-color font-semibold"
        >
          Services+
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 rounded-md w-52"
        >
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white pb-2 "
          >
            {" "}
            <NavLink to={"/services"}>All Services</NavLink>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-semibold text-white pb-2"
          >
            {" "}
            <NavLink to={"/pickup"}>Garbage Pickup</NavLink>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-semibold text-white pb-2"
          >
            {" "}
            <Link to={""}>Waste Collection</Link>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-semibold text-white pb-2"
          >
            {" "}
            <Link to={""}>Dumpster Service</Link>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <Link to={""}>Residential Service</Link>
          </motion.li>
        </ul>
      </div>

      <li className="text-xl hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li className="text-xl hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="text-xl hover:text-brand-color font-semibold"
        >
          Pages+{" "}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 rounded-md w-52"
        >
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white pb-2 "
          >
            {" "}
            <NavLink to={"/about"}>About Us</NavLink>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-semibold text-white pb-2"
          >
            {" "}
            <NavLink to={"/about"}>Team</NavLink>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </motion.li>
          <span className="border border-slate-600"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <NavLink to={"/priceTable"}>Pricing-Table</NavLink>
          </motion.li>
        </ul>
      </div>
      {user && (
        <li className="text-xl hover:text-brand-color font-semibold">
          {" "}
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
      <li className="text-xl hover:text-brand-color font-semibold">
        {" "}
        <NavLink to="/pickUpReq">PickUp Request</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky bg-white  top-0 z-20">
      <div className="navbar  lg:px-10 lg:py-7 drop-shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="bg-white  menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link to={"/"} className="text-xl lg:text-3xl font-bold">
            <span className="bold text-brand-color">Eco</span>SmartBin
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-8 px-1 ">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <btn
              onClick={handleLogOut}
              className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:from-green-300 hover:to-brand-color hover:bg-gradient-to-r "
            >
              Logout
            </btn>
          ) : (
            <button>
              {" "}
              <Link
                to={"/login"}
                className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color transition duration-300"
              >
                Log in
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
