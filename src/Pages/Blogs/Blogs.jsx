import BlogCard from "./BlogCard";
import useGetBlog from "../../API/BlogApi/useGetBlog";

const Blog = () => {
  const [blogs, loading] = useGetBlog();

  return (
    <div className="py-20">
      <h5 className="text-2xl text-green-600 font-semibold text-center pb-5">
        Our Articles
      </h5>
      <h3 className="text-5xl font-bold text-[#000000] text-center">
        Get more updates from Eco-Smart Bins
      </h3>
      {loading ? (
        <div className="text-center">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          {blogs?.map((blog) => (
            <BlogCard key={blog?._id} blog={blog}></BlogCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
