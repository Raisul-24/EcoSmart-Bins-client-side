import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <figure className="">
        <img src={data?.img} className="w-full h-60 rounded-b-full" alt="Shoes" />
      </figure>
      <div className="card-body text-center relative">
        <h2 className="card-title justify-center">{data?.title}</h2>
        <p className="pb-10">
          {data?.drescaption.slice(0, 80) === data?.drescaption.length
            ? data?.drescaption
            : `${data?.drescaption.slice(0, 80)} ...`}
        </p>
        <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 z-10">
        <Link to={`/services/${data?._id}`} className="bg-base-100 shadow-xl text-4xl w-20 h-20 rounded-full border border-[#3A9E1E] flex justify-center items-center hover:text-white hover:bg-[#3A9E1E]">
          <FaLongArrowAltRight />
        </Link>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceCard;
