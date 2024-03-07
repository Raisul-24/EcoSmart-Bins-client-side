import {
  FaBars,
  FaEdit,
  FaHistory,
  FaHome,
  FaPlusSquare,
  FaRegFileAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { VscActivateBreakpoints } from "react-icons/vsc";
import {
  MdOutlineWorkHistory,
  MdOutlineWork,
  MdWorkOutline,
} from "react-icons/md";
import { FaCalendarPlus, FaCartShopping } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import useUsers from "../API/UserApi/useUsers";

const Dashboard = () => {
  const { user, loading } = UseAuth();
 
  const [allUsers, isPending] = useUsers();
  

  const isAdmin = allUsers?.filter(
    (data) => data?.role === "admin" && data?.email === user?.email
  );
  const isUser = allUsers?.filter(
    (data) => data?.role === "user" && data?.email === user?.email
  );
  const isWorker = allUsers?.filter(
    (data) => data?.role === "worker" && data?.email === user?.email
  );

  if (loading || isPending ) {


    return (
      <div>
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="drawer lg:drawer-open flex flex-col lg:flex-row font-andika">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content shadow p-2 lg:p-0 pl-3 lg:m-0 flex flex-row items-center justify-between">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
            <FaBars className="text-brand-color text-sm "></FaBars>
          </label>
          {/* open content */}
          <div className="p-3 flex gap-3 items-center lg:hidden ">
         
            <h2 className="font-semibold lg:text-xl"> {user?.displayName}</h2>
         
              <div className="">
                <img
                  className="w-10 h-10 rounded-full border-2 border-brand-color"
                  src={
                    user?.photoURL ? user?.photoURL : "https://i.ibb.co/8X8stTp/user.webp"
                  }
                  alt="image"
                />
              </div>              
          </div>
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className=" pr-2 lg:pr-0 w-52 lg:w-64 min-h-screen bg-gradient-to-r from-brand-color to-green-800 ... text-white overflow-hidden">
            <div className="card px-0 pt-8 pb-5 lg:pb-0 items-center mx-auto">
              <Link to={"/"} className="text-xl lg:text-3xl font-bold">
                Eco<span className="bold text-green-950">SmartBin</span>
              </Link>
              <div className="hidden lg:block">
                <figure className="px-10 py-3">
                  <div className="">
                    <img
                      className="w-28 h-28 rounded-full border-2"
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://i.ibb.co/8X8stTp/user.webp"
                      }
                      alt="image"
                    />
                  </div>
                </figure>
              </div>
              <div className="card-body px-0 pt-0 items-center text-center hidden lg:block">

                <h2 className="font-bold lg:text-xl"> {user?.displayName}</h2>

                <p className="text-sm lg:text-md font-bold">{user?.email}</p>
              </div>
            </div>

            <ul className="pl-2 lg:pl-4 z-20 px-0 font-semibold ">
              <li className="text-xs md:text-sm w-full">
                <NavLink
                  to="/dashboard/overview"
                  className={({ isActive }) =>
                    isActive
                      ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                      : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                  }
                >
                  <FaPlusSquare />
                  Overview
                </NavLink>
              </li>

              {/* admin routes */}
              {isAdmin?.length > 0 ? (
                <>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/addServices"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaPlusSquare />
                      Add Services
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/manageServices"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaEdit />
                      Manage Services
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/addProducts"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaPlusSquare />
                      Add Products
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/manageProducts"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaEdit />
                      Manage Products
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/managePickup"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaEdit />
                      Manage Pickup
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/job"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaCalendarPlus />
                      Add Job Post
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/application"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaRegFileAlt />
                      Manage Applicant
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/manageShowcase"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaEdit />
                      Manage Showcase
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/manageUser"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaUsers />
                      Manage User
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* worker routes */}

              {isWorker?.length > 0 ? (
                <>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/PickupWork"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <MdOutlineWorkHistory />
                      Pickup Work
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/OnGoingWork"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <MdWorkOutline />
                      OnGoing Works
                    </NavLink>
                  </li>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/CompleteWorks"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <MdOutlineWork />
                      Complete Works
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* user routes */}

              {isUser?.length > 0 ? (
                <>
                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/cart"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaCartShopping></FaCartShopping> My Cart
                    </NavLink>
                  </li>
                  

                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/feedback"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaStar /> Feedback
                    </NavLink>
                  </li>

                  <li className="text-xs md:text-sm w-full">
               <NavLink to="/dashboard/pickupRequest"
                    className={({ isActive}) =>
                    isActive ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"  : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
              }
               >
                 <VscActivateBreakpoints /> My Pickup Request
               </NavLink>
             </li>


                  <li className="text-xs md:text-sm w-full">
                    <NavLink
                      to="/dashboard/paymentHistory"
                      className={({ isActive }) =>
                        isActive
                          ? " bg-white flex items-center gap-2 py-2 w-full pl-2 lg:pl-4 text-black rounded lg:rounded-r-none"
                          : "flex items-center gap-2 pl-2 lg:pl-4 py-2"
                      }
                    >
                      <FaHistory></FaHistory>
                      Payment History
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* shared routes */}

              <li className="text-xs md:text-sm w-full">
                <NavLink
                  to="/"
                  className="flex gap-2 pl-2 lg:pl-4 items-center"
                >
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>

              
              
            </ul>
          </div>
        </div>
        <div className="flex-1 px-5 pb-5 z-0">
          <Outlet></Outlet>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;