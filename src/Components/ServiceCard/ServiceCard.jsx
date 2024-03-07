import PropTypes from "prop-types";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ data, isTrue, DeleteFun }) => {
  return (
    <div className="card md:mb-72 mb-6 font-montserrat">
      <figure className="relative">
        <div className="group md:w-96 md:h-80 rounded-lg overflow-hidden relative">
          <img
            src={data?.img}
            className="w-full h-full object-cover"
            alt="Services"
          />
          <div className="md:absolute inset-0 bg-gradient-to-b from-transparent to-[#257830] opacity-0 group-hover:opacity-95 transition-opacity duration-300"></div>
        </div>
      </figure>
      <div className="card-body md:absolute text-start md:w-[350px] md:h-[345px] rounded-xl shadow-xl p-10 bg-white top-0 px-5 md:mt-52 ">
        <Link
          to={`/services/${data?._id}`}
          className="card-title font-bold hover:text-green-800 justify-center pb-4"
        >
          {data?.title}
        </Link>
        <p className="pb-6">{data?.shortDescription}...</p>

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
              to={`/services/${data?._id}`}
              className="bg-white btn btn-outline text-md font-bold border-2 rounded-md  flex justify-center items-center hover:text-white hover:bg-[#257830] h-14 gap-4 w-[200px]"
            >
              Explore More
              <span className="text-2xl">
                <FaArrowCircleRight />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceCard;
