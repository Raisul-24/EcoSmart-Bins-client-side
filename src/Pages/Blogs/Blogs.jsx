import BlogCard from "./BlogCard";
import useGetBlog from "../../API/BlogApi/useGetBlog";
import { FaSearch } from "react-icons/fa";

const Blog = () => {
  const [blogs, loading] = useGetBlog();

  return (
    <div>
      <div
        className="hero h-96 relative"
        style={{ backgroundImage: "url(https://i.imgur.com/OmENS5F.jpg)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Discover Our Blog</h1>
            <p className="mb-5">
              Explore Insights, Tips, and Inspiration for Sustainable Living
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 mx-8">
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
            <div>
              <div className="flex col-span-3 w-96 p-10 bg-[#ebf5e9] mt-4">
                <input
                  className="h-12 w-80 relative p-4"
                  placeholder="Search..."
                  label="Input With Icon"
                />
                <span className="absolute top-0 bottom-0 right-0 left-0 -ml-[10px] mt-[435px] text-gray-400 text-xl">
                  <FaSearch />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
