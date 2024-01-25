import {
  FaBars,
  FaCameraRetro,
  FaEdit,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaMoneyCheck,
  FaPlusSquare,
  FaSearch,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import logo from "../../public/logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open flex flex-col lg:flex-row">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">
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
              <div className="card  items-center mx-auto">
                <figure className="px-10 pt-8">
                  <div className="">
                    <img
                      className="w-28 h-28 rounded-full border-4 border-brand-color"
                      src="https://i.ibb.co/8X8stTp/user.webp"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-xl">displayName </h2>
                  <p className=" font-bold">useremail</p>
                </div>
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
              <li className="lg:text-lg">
                <Link to="/dashboard/addProducts">
                  <FaPlusSquare />
                  Add Products
                </Link>
              </li>
              <li className="lg:text-lg">
                <Link to="/dashboard/manageProducts">
                <FaEdit />
                  Manage Products
                </Link>
              </li>
              <li className="lg:text-lg">
                <Link to="/dashboard/managePickup">
                <FaEdit />
                  Manage Pickup Request
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
              <li className="lg:text-lg">
                <Link to="/dashboard/feedback">
                  <FaStar /> Feedback
                </Link>
              </li>
              <li className="lg:text-lg">
            <Link to="/dashboard/payment">
              <FaMoneyCheck></FaMoneyCheck>
             Make Payment 
            </Link>
          </li>
          <li className="lg:text-lg">
            <Link to="/dashboard/paymentHistory">
              <FaHistory></FaHistory>
              Payment History
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
