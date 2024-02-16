import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const ServiceNavbar = ({ data }) => {
  console.log(data);
  return (
    <div>
      <motion.li
        whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="font-semibold text-white pb-1"
      >
        <NavLink to={`/services/${data?._id}`}>{data?.category}</NavLink>
        <span className="border-t border-slate-400"></span>
      </motion.li>
    </div>
  );
};

export default ServiceNavbar;
