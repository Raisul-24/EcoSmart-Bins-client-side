import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import useAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";
import {
  FaRegBell,
  FaRegUser,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchService } from "../../Redux/ServiceSlice";
import ServiceNavbar from "./ServiceNavbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { service: data } = useSelector((state) => state.services);
  useEffect(() => {
    dispatch(fetchService(6));
  }, [dispatch]);
  const location = useLocation();
  const { user, logOut } = useAuth();
  const [cart] = useCart();

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
          tabIndex={-1}
          role="button"
          className="lg:text-xl hover:text-brand-color font-semibold"
        >
          Services+
        </div>
        <ul
          tabIndex={-1}
          // onClick={toggleServicesDropdown}
          className="dropdown-content ml-28 lg:ml-0 z-[1] menu p-2 bg-opacity-80 shadow bg-blue-950 rounded-md w-40 lg:w-52"
        >
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white pb-2 "
          >
            {" "}
            <Link to={"/services"}>All Services</Link>
          </motion.li>
          <span className="border border-slate-400"></span>
          {data?.map((service) => (
            <ServiceNavbar key={service?._id} data={service} />
          ))}
        </ul>
      </div>

      <li className="text-xl hover:text-brand-color font-semibold">
        {" "}
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={-2}
          role="button"
          className="lg:text-xl hover:text-brand-color font-semibold"
        >
          Pages+{" "}
        </div>
        <ul
          tabIndex={-2}
          // onClick={togglePagesDropdown}
          className="dropdown-content ml-28 lg:ml-0 z-[1] menu p-2 shadow bg-blue-950 bg-opacity-80 rounded-md w-40 lg:w-52"
        >
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white pb-2 "
          >
            {" "}
            <Link to={"/about"}>About Us</Link>
          </motion.li>
          <span className="border border-slate-400"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-semibold text-white pb-2"
          >
            {" "}
            <Link to={"/team"}>Team</Link>
          </motion.li>
          <span className="border border-slate-400"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <Link to={"/contact"}>Contact Us</Link>
          </motion.li>
          <span className="border border-slate-400"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <Link to={"/blogs"}>Blog</Link>
          </motion.li>
          <span className="border border-slate-400"></span>
          <motion.li
            whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-white"
          >
            {" "}
            <Link to={"/priceTable"}>Pricing-Table</Link>
          </motion.li>
        </ul>
      </div>
      {user && (
        <li className="text-xl hover:text-brand-color font-semibold">
          {" "}
          <NavLink to={"/dashboard/overview"}>Dashboard</NavLink>
        </li>
      )}
      <li className="text-xl hover:text-brand-color font-semibold">
        {" "}
        <NavLink to="/pickUpReq">PickUp Request</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex lg:min-h-16 min-h-12 lg:px-10 lg:py-5 p-2 justify-between bg-green-900 text-white">
        <div>
          <p className="flex items-center gap-2">
            <FaPhone className=" text-xl"></FaPhone> Phone: 333 666 0000
          </p>
        </div>

        <div className=" flex gap-5 lg:gap-10 ">
          <div className="flex">
            <FaShoppingCart className="md:text-3xl text-2xl" />
            <div className="badge badge-secondary ml-2 bg-white text-brand-color">
              {cart.length}
            </div>
          </div>
          <div>
            <FaRegBell className="md:text-3xl text-2xl" />
          </div>
        </div>
      </div>
      <div className="sticky border-b-2 border bg-white bg-opacity-90 top-0 z-20 font-andika">
        <div className="navbar  lg:px-10 lg:py-7 drop-shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="bg-white bg-opacity-90 menu-sm dropdown-content mt-3 z-[2] p-2 shadow space-y-2 rounded-box w-52"
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

          {user ? (
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className=" rounded-full">
                    <img src={user.photoURL} alt="" className="rounded-full" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content ml-28 lg:ml-0 z-[1] menu p-2 shadow bg-blue-950 bg-opacity-80 rounded-md w-40 lg:w-52 text-white"
                >
                  <motion.li
                    whileHover={{ scale: 1.3, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white"
                  >
                    {" "}
                    <Link to={"/profile"}>
                      View Profile <FaRegUser />
                    </Link>
                  </motion.li>
                  <span className="border border-slate-400"></span>
                  <motion.li
                    whileHover={{ scale: 1.3, originX: 0, color: "#f54242" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white"
                  >
                    {" "}
                    <button onClick={handleLogOut}>
                      Logout <FaSignOutAlt></FaSignOutAlt>
                    </button>
                  </motion.li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end capitalize">
              {location.pathname === "/login" ? (
                <Link
                  to={"/register"}
                  className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color "
                >
                  register
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color "
                >
                  login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
