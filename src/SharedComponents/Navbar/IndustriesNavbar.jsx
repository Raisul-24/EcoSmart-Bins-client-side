import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const IndustriesNavbar = ({ industry }) => {
  //  console.log(industry);
  return (
    <div className="overflow-hidden menu">
      <motion.li
        whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="font-semibold text-white pb-1 "
      >
        <Link
          className="border-b rounded-none border-slate-400"
          to={`/industries/${industry?._id}`}
        >
          {industry?.category}
        </Link>
      </motion.li>
    </div>
  );
};

export default IndustriesNavbar;
