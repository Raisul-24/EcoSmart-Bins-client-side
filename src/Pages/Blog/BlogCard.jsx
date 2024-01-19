import PropTypes from "prop-types";
import { FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, shortName, shortDescription, image, commentNumber } = blog || {};

  return (
    <>
      <div
        data-aos="zoom-in"
        className="bg-white border flex flex-col h-full p-4 border-white rounded-lg 
	 shadow-2xl pb-4"
      >
        <div className="">
          <img
            className=" h-60 w-full border-b-8 hover:scale-[1.07] duration-1000 hover:border-[#005c97] border-[#001535] rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col pt-6">
          <div className="flex justify-between items-center pb-5">
            <p className="flex justify-center items-center gap-2">
              <span className="text-green-700">
                <FaUser />
              </span>
              Admin
            </p>
            <p className="flex justify-center items-center gap-2">
              <span className="text-green-700">
                <FaComment />
              </span>{" "}
              {commentNumber} Comment
            </p>
          </div>
          <h5
            className="mb-5 text-2xl font-bold tracking-tight 
	  text-[#000000]"
          >
            {shortName}
          </h5>

          <p className="mb-3 font-normal text-[#370000]">{shortDescription}</p>
          <div className="flex mt-auto justify-center items-center">
            <button className="flex mt-auto w-full text-center ">
              <Link
                to={`/blog/${id}`}
                className="btn btn-ghost flex  bg-green-600 hover:bg-green-800 my-6 w-full text-white"
              >
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
