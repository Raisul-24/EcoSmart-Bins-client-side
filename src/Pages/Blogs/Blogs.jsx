import BlogCard from "./BlogCard";
import useGetBlog from "../../API/BlogApi/useGetBlog";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Blog = () => {
  const [blogs, loading] = useGetBlog();

  return (
    <div className="font-montserrat">
      <div
        className="hero h-[desired-height] relative"
        style={{ backgroundImage: "url(https://i.imgur.com/OmENS5F.jpg)" }}
      >
        <div>
          <div
            className="hero h-96 relative"
            style={{ backgroundImage: "url(https://i.imgur.com/OmENS5F.jpg)" }}
          >
            <div className="hero-overlay bg-black bg-opacity-60  inset-0"></div>
            <div className="hero-content text-center text-neutral-content relative z-10">
              <div className="max-w-md text-white">
                <h1 className="mb-5 text-5xl font-bold">Discover Our Blog</h1>
                <p className="mb-5">
                  Explore Insights, Tips, and Inspiration for Sustainable Living
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-8 mt-20">
        <h5 className="text-2xl text-green-600 font-semibold text-center pb-5">
          Our Articles
        </h5>
        <h3 className="text-5xl font-bold text-[#000000] text-center mb-20">
          Get more updates from Eco-Smart Bins
        </h3>
        {loading ? (
          <div className="text-center">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="md:grid grid-cols-9 gap-12 items-start justify-center">
            <div className="col-span-6 mb-5 lg:grid-cols-3 ">
              {blogs?.map((blog) => (
                <BlogCard key={blog?._id} blog={blog}></BlogCard>
              ))}
            </div>
            <div className=" col-span-3">
              {/* search input field */}
              <div className="flex w-96 p-10 bg-[#ebf5e9] ">
                <input
                  className="h-12 w-72 relative p-4 "
                  placeholder="Search..."
                  label="Input With Icon"
                />
                <button className="absolute ml-60 mt-4 text-gray-400 text-xl">
                  <FaSearch />
                </button>
              </div>
              {/* categories buttons part */}
              <div className="w-96 p-10 bg-[#ebf5e9] mt-4">
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Waste Reduction
                </button>
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Recycling Solutions
                </button>
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Waste Management
                </button>
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Sorting Reimagined
                </button>
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Waste Collection
                </button>
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Waste Practices
                </button>
                <button className="h-12 px-6 hover:bg-[#3a9e1e] rounded-md text-start w-72 flex justify-start items-center gap-4 hover:text-white bg-white text-xl font-semibold mb-6">
                  <span>
                    <FaArrowRight />
                  </span>
                  Waste Traceability
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
