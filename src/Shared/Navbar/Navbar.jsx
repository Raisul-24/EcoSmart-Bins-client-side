import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    const navLinks = <>
    <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/"}>Home</NavLink></li>
    <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/services"}>Services</NavLink></li>
    <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/contact"}>Contact Us</NavLink></li>
    <li className="text-xl hover:text-brand-color font-semibold"> <NavLink to={"/about"}>About Us</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-10 lg:py-7 drop-shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                    <Link to={"/login"} className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color ">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;