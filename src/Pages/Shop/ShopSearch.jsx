import { FaSearch } from "react-icons/fa";
const ShopSearch = ({handelSubmit}) => {
  return (
    <form onSubmit={handelSubmit} className="flex justify-center relative py-10 px-7 bg-[#e9f1ea]">
      <input
        className="h-12 p-4 w-full pr-10"
        name="search"
        placeholder="Search..."
        label="Input With Icon"
      />
      <button type="submit" className="absolute top-10 right-10 ml-60 mt-4 text-gray-400 text-lg">
        <FaSearch />
      </button>
    </form>
  );
};

export default ShopSearch;
