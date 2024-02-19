import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ServiceNavbar = ({ data }) => {
  console.log(data);
  return (
    <div className="overflow-hidden menu">
      <motion.li
        whileHover={{ scale: 1.3, originX: 0, color: "#3A9E1E" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="font-semibold text-white pb-1 "
      >
        <Link className="border-b rounded-none border-slate-400" to={`/services/${data?._id}`}>{data?.category}</Link>
        {/* <span className="border-b-4 rounded-none h-0 border-slate-400"></span> */}
      </motion.li>
      {/* <span className="border border-slate-400"></span> */}
      
    </div>
  );
};

export default ServiceNavbar;
