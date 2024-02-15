import BlogCard from "./BlogCard";
import useGetBlog from "../../API/BlogApi/useGetBlog";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import getBlogCategories from "../../API/BlogApi/getBlogCategories";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, loading] = useGetBlog();
  const [categories] = getBlogCategories();

  return (
    <div className="font-andika">
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
          <div className="md:grid grid-cols-9 gap-20 items-start justify-center">
            <div className=" mb-5 col-span-6">
              {blogs?.map((blog) => (
                <BlogCard key={blog?._id} blog={blog}></BlogCard>
              ))}
            </div>
            <div className="col-span-3">
              {/* search input field */}
              <form className="flex p-10 pt-20 rounded-lg bg-[#f59e0b]">
                <input
                  type="text"
                  name="search"
                  id=""
                  className="h-12 w-96 relative p-4 overflow-hidden"
                  placeholder="Search..."
                  label="Input With Icon"
                />

                <button className="absolute ml-60 mt-4 text-gray-400 text-lg">
                  {" "}
                  <FaSearch />
                </button>
              </form>
              {/* categories buttons part */}
              <div className="rounded-lg p-10 bg-[#e9f1ea] mt-4">
                {categories?.map((category) => (
                  <button key={category.id}>
                    <Link
                      to={`/category=${category?.title?.toLowerCase()}`}
                      className="h-14 px-8 bg-[#182822] hover:bg-[#257830]
                      rounded-md text-start w-72 flex justify-start items-center
                      gap-4 text-white text-md font-bold mb-6"
                    >
                      <span className="p-3 text-black rounded-full bg-white">
                        <FaArrowRight />
                      </span>
                      {category?.title}
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
