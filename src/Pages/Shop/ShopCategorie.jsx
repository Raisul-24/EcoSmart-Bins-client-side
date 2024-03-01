import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const ShopCategorie = ({ data, setCategory,isTrue }) => {
  return (
    <motion.button
    whileHover={{ scale: 1.1, originX: 0, color: "#3A9E1E" }}
    transition={{  stiffness: 300 }}
    onClick={()=>setCategory(isTrue ? "" : data)} className="  capitalize  rounded-md flex items-center gap-4 text-md font-bold mb-6">
      <span className=" text-black ">
        <FaArrowRight />
      </span>
      {data}
    </motion.button>
  );
};

export default ShopCategorie;
