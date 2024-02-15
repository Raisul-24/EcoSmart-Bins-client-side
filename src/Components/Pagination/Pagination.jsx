import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Pagination = ({ data, currentPage, setCurrentPage }) => {
  const handelPrePage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handelNextPage = () => {
    if (currentPage < data.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex flex-wrap justify-center py-10 pb-20 items-center gap-4">
      <button
        onClick={handelPrePage}
        className="flex font-bold items-center gap-2 border border-brand-color px-4 py-2 rounded-lg hover:bg-brand-color hover:text-white"
      >
        <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
        Previous
      </button>
      <div className="flex items-center gap-2">
        {data?.map((item, idx) => (
          <button
            onClick={() => setCurrentPage(item)}
            className={`flex font-bold items-center gap-2 border border-brand-color px-4 py-2 rounded-lg hover:bg-brand-color hover:text-white ${
              currentPage === item && "bg-brand-color text-white"
            } `}
            key={item}
          >
            {++idx}
          </button>
        ))}
      </div>
      <button
        onClick={handelNextPage}
        className="flex font-bold items-center gap-2 border border-brand-color px-4 py-2 rounded-lg hover:bg-brand-color hover:text-white"
      >
        Next
        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
