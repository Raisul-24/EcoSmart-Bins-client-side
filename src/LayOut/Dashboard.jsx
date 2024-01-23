import { FaHome, FaPlusSquare, FaShoppingBag } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import logo from "../../public/logo.png"


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className=" p-4 w-64 min-h-full text-base-content bg-blue-200">
                        <div className="text-center mb-10">
                            <div className="w-full mx-auto"><img src={logo} className='w-20' alt="" /></div>
                            <Link to={"/"} className="text-xl lg:text-3xl font-bold"><span className="bold text-brand-color">Eco</span>SmartBin</Link>
                        </div>
                        <ul className="menu">
                            <li className="text-xl"><Link to="/dashboard/userProfile">
                                <FaHome></FaHome> User Profile</Link>
                            </li>
                            <li className="text-xl"><Link to="/dashboard/addProduct">
                            <FaPlusSquare/>Add Services</Link>
                            </li>
                            <li className="text-xl"><Link to="/dashboard/myProduct">
                                <FaList></FaList> My Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Dashboard;