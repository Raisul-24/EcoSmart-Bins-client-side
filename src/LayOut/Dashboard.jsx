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
  FaUsers,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Dashboard = () => {
  const { user } = UseAuth()
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
              <Link to={"/"} className="text-xl lg:text-3xl font-bold"><span className="bold text-brand-color">Eco</span>SmartBin</Link>
                <figure className="px-10 pt-8">
                  <div className="">
                    {
                      user? <img className="w-28 h-28 rounded-full border-4 border-brand-color" src={user?.photoURL} alt="" /> : <img
                      className="w-28 h-28 rounded-full border-4 border-brand-color"
                      src="https://i.ibb.co/8X8stTp/user.webp"
                    />
                    }
                    
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  {
                    user? <h2 className="card-title text-xl"> {user?.displayName}</h2> :
                    <h2 className="card-title text-xl"> displayName</h2>
                  }
                  {
                    user? <p className=" font-bold">{user?.email}</p> : <p className=" font-bold">useremail</p>
                  }
                  
                </div>
              </div>

            <ul className="menu font-semibold">
              {/* admin routes */}
              <li className="">
                <NavLink to="/dashboard/addServices">
                  <FaPlusSquare />
                  Add Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageServices">
                  <FaEdit />
                  Manage Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/addProducts">
                  <FaPlusSquare />
                  Add Products
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageProducts">
                <FaEdit />
                  Manage Products
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/managePickup">
                <FaEdit />
                  Manage Pickup Request
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/manageShowcase">
                <FaEdit />
                  Manage Showcase
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/allUsers">
                  <FaUsers/>
                All users
                </NavLink>
              </li>

              <div className="divider"></div>

              {/* user routes */}
              <li className="">
                <NavLink to="/dashboard/cart">
                  <FaCartShopping></FaCartShopping> My Cart
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/addShowcase">
                  <FaCameraRetro />Add Showcase
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/feedback">
                  <FaStar /> Feedback
                </NavLink>
              </li>
              <li className="">
            <NavLink to="/dashboard/payment">
              <FaMoneyCheck></FaMoneyCheck>
             Make Payment 
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/paymentHistory">
              <FaHistory></FaHistory>
              Payment History
            </NavLink>
          </li>

              {/* shared routes */}
              <div className="divider"></div>
              <li className="">
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/services">
                  <FaSearch></FaSearch>
                  Available Services
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/contact">
                  <FaEnvelope></FaEnvelope>
                  Contact
                </NavLink>
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
