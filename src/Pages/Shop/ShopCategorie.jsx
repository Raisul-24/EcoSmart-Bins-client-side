import { FaArrowRight } from "react-icons/fa";
const ShopCategorie = ({ data, setCategory }) => {
  return (
    <button onClick={()=>setCategory(data === "all products" ? "" : data)} className="h-14 px-8 bg-[#182822] capitalize hover:bg-[#257830] rounded-md flex items-center gap-4 text-white text-md font-bold mb-6">
      <span className="p-3 text-black rounded-full bg-white">
        <FaArrowRight />
      </span>
      {data}
    </button>
  );
};

export default ShopCategorie;
