import { useParams } from "react-router-dom";
import useGetABlog from "../../API/BlogApi/useGetABlog";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog,loading] = useGetABlog(id)

  // const { shortName, shortDescription, image, description } = sameId || {};

  return (
    <div>
      <div className="font-montserrat ">
        <h4 className="text-5xl font-bold bg-[#f4f4f4] text-center py-8 text-[#001335]">
          Blog Details
        </h4>
        {loading ? <div className="text-center">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div> : <div>
        <div>
        <div className="md:min-h-full">
          <div className="">
            <img
              data-aos="zoom-out"
              className="md:h-[650px] w-screen"
              src={blog?.image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 mb-20 flex flex-col gap-5 justify-center items-start">
        <h3 className="text-4xl font-bold text-[#000000]">{blog?.shortName}</h3>
        <p className="text-[#370000]">
          {blog?.shortDescription} {blog?.description}
        </p>
        </div>
        </div> }

      </div>
    </div>
  );
};

export default BlogDetails;
