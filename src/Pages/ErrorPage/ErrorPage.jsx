import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const ErrorPage = () => {
   return (
      <div className="my-3 md:my-5 lg:my-8">
         <Link to="/">
            <div className="flex justify-center items-center">
               <IoArrowBackCircle className="text-2xl mr-1"></IoArrowBackCircle>
               <h2 className="text-xl">Back to Home</h2>
            </div></Link>
         <div className="flex justify-center">
            <img src="https://i.ibb.co/TqBTwtQ/error3.gif" alt="" className="my-5 rounded-3xl shadow-xl" />
         </div>
      </div>
   );
};

export default ErrorPage;