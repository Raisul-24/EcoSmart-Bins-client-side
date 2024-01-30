import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import UseAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";


const Navbar = () => {
    const { user, logOut } = UseAuth();


    const handleLogOut = async () => {
        try {
            logOut()
            toast.success('Log Out Successfully!!');
        } catch (error) {
            toast.error(error.message);
        }
    }
    const navLinks = <>
        <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/"}>Home</NavLink></li>
        <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/services"}>Services</NavLink></li>
        <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/contact"}>Contact Us</NavLink></li>
        <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/shop"}>Shop</NavLink></li>
        {/* <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/about"}>About Us</NavLink></li> */}
        {
            user && <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        }
        <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to="/pickUpReq">PickUp Request</NavLink></li>
    </>
    return (
        <div className="sticky bg-white bg-opacity-90 top-0 z-20">
            <div className="navbar bg-base-100 lg:px-10 lg:py-7 drop-shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="bg-white bg-opacity-90 menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <Link to={"/"} className="text-xl lg:text-3xl font-bold"><span className="bold text-brand-color">Eco</span>SmartBin</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-8 px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                        <btn onClick={handleLogOut} 
                        className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color"
                        >Logout</btn>
                        :
                        <btn> <Link to={'/login'}
                            className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color"
                            >Log in</Link></btn>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;