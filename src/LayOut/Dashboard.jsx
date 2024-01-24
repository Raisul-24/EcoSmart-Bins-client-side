import { FaBars, FaCameraRetro, FaEdit, FaEnvelope, FaHome, FaPlusSquare, FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping, } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open flex flex-col lg:flex-row">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn  drawer-button lg:hidden"
          >
            <FaBars className="text-brand-color text-2xl "></FaBars>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="p-2 lg:p-4 w-52 lg:w-64 min-h-full text-base-content bg-green-200 z-10">
            <div className="text-center mb-10">
              <div className="w-1/3 mx-auto">
                <img src={logo} className="w-20" alt="" />
              </div>
              <Link to={"/"} className="text-xl lg:text-3xl font-bold">
                <span className="bold text-brand-color">Eco</span>SmartBin
              </Link>
            </div>
            <ul className="menu font-semibold">
                {/* admin routes */}
              <li className="lg:text-lg">
                <Link to="/dashboard/adminProfile">
                  <FaUser></FaUser> Admin Profile
                </Link>
              </li>
              <li className="lg:text-lg">
                <Link to="/dashboard/addServices">
                  <FaPlusSquare />
                  Add Services
                </Link>
              </li>
              <li className="lg:text-lg">
                <Link to="/dashboard/manageServices">
                  <FaEdit />
                  Manage Services
                </Link>
              </li>

              <div className="divider"></div>
             
             {/* user routes */}
              <li className="lg:text-lg">
                <Link to="/dashboard/userProfile">
                  <FaUser></FaUser> User Profile
                </Link>
              </li>
              <li className="lg:text-lg">
                <Link to="/dashboard/cart">
                  <FaCartShopping></FaCartShopping> My Cart
                </Link>
              </li>
              <li className="lg:text-lg">
                <Link to="/dashboard/addShowcase">
                <FaCameraRetro /> Showcase
                </Link>
              </li>

              {/* shared routes */}
          <div className="divider"></div>
          <li className="lg:text-lg">
            <Link to="/">
              <FaHome></FaHome>
              Home
            </Link>
          </li>
          <li className="lg:text-lg">
            <Link to="/services">
              <FaSearch></FaSearch>
              Available Services
            </Link>
          </li>
          <li className="lg:text-lg">
            <Link to="/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </Link>
          </li>

            </ul>
          </div>
        </div>
        <div className="flex-1 p-5 lg:p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;