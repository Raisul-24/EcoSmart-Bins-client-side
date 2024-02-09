import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ data, isTrue, DeleteFun }) => {
  return (
    <div className="card bg-base-100 shadow-xl mb-10 font-montserrat">
      <figure className="">
        <img
          src={data?.img}
          className="w-full h-60 rounded-b-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center relative">
        <h2 className="card-title justify-center">{data?.title}</h2>
        <p className="pb-10">
          {data?.drescaption.slice(0, 80) === data?.drescaption.length
            ? data?.drescaption
            : `${data?.drescaption.slice(0, 80)} ...`}
        </p>
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
          <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 z-10">
            <Link
              to={`/services/${data?._id}`}
              className="bg-base-100 shadow-xl text-4xl w-20 h-20 rounded-full border border-[#3A9E1E] flex justify-center items-center hover:text-white hover:bg-[#3A9E1E]"
            >
              <FaLongArrowAltRight />
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
