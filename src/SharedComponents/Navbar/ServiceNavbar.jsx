import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ServiceNavbar = ({ data }) => {
  //  console.log(data);
  return (
    <div className="overflow-hidden menu">
      <motion.li
        whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="font-semibold text-white pb-1 "
      >
        <Link
          className="border-b rounded-none border-slate-400 text-xs md:text-base"
          to={`/services/${data?._id}`}
        >
          {data?.category}
        </Link>
      </motion.li>
    </div>
  );
};

export default ServiceNavbar;
