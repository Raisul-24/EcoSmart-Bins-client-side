//import { FaArrowRight } from "react-icons/fa";
const ShopCategory = ({ data, setCategory, isTrue }) => {
  return (
    <button
      onClick={() => setCategory(isTrue ? "" : data)}
      className="h-14 px-8 bg-[#182822] capitalize hover:bg-[#257830] rounded-md flex items-center gap-4 text-white text-md font-bold mb-6"
    >
      {data}
    </button>
  );
};

export default ShopCategory;
