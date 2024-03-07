import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const IndustriesCard = ({ data, isTrue, DeleteFun }) => {
  return (
    <div className="card md:mb-72 mb-6 font-montserrat">
      <figure className="relative">
        <div className="group md:w-96 md:h-80 rounded-lg overflow-hidden relative">
          <img
            src={data?.img}
            className="w-full h-full object-cover"
            alt="industries"
          />
          <div className="md:absolute inset-0 bg-gradient-to-b from-transparent to-[#257830] opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>
        </div>
      </figure>
      <div className="card-body md:absolute text-start md:w-[350px] md:h-96 rounded-xl shadow-xl p-10 bg-white top-0 px-5 md:mt-52 ">
        <Link
          to={`/industries/${data?._id}`}
          className="card-title font-bold hover:text-green-800 justify-center pb-4"
        >
          {data?.category}
        </Link>
        <p className="pb-4">{data?.shortDescription}...</p>
        <hr />

        {isTrue ? (
          <div className="space-y-4">
            <Link
              to={`/dashboard/updateServices/${data?._id}`}
              className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
            >
              update
            </Link>
            <button
              onClick={() => DeleteFun(data?._id)}
              className="btn lg:px-10 bg-red-500 hover:bg-red-600 lg:text-xl capitalize text-white w-full"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="mb-6">
            <Link
              to={`/industries/${data?._id}`}
              className="text-lg font-bold hover:border-b-2 hover:border-black flex justify-start items-center hover:text-green-800 h-14 gap-4 w-44"
            >
              Explore More
              <span className="text-xl">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
IndustriesCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndustriesCard;
