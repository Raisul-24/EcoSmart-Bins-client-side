import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";
const ServiceCard = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <figure>
        <img src={data?.img} className="w-full h-60 rounded-b-full" alt="" />
      </figure>
      <div className="card-body text-center relative">
        <h2 className="card-title justify-center">{data?.title}</h2>
        <p className="pb-10">
          {data?.drescaption.slice(0, 80) === data?.drescaption.length
            ? data?.drescaption
            : `${data?.drescaption.slice(0, 80)} ...`}
        </p>
        <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 z-10">
        <button className="bg-base-100 shadow-xl text-4xl w-20 h-20 rounded-full border border-brand-color flex justify-center items-center hover:text-white hover:bg-brand-color">
          <FaLongArrowAltRight />
        </button>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceCard;
