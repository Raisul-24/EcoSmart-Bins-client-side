import PropTypes from "prop-types";
import { FaComment, FaUser } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogCard = ({ blog }) => {
  const { id, name, shortDescription, image, commentNumber } = blog || {};

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    console.log("Like clicked");
    setLiked(true);
    setDisliked(false);
    showToast("Liked");
  };

  const handleDislikeClick = () => {
    console.log("Dislike clicked");
    setDisliked(true);
    setLiked(false);
    showToast("Disliked");
  };

  const showToast = (message) => {
    toast.success(message, {
      autoClose: 2000,
    });
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        className="bg-white border flex flex-col h-full p-4 border-white rounded-lg 
	 shadow-2xl pb-4"
      >
        <div className="">
          <img
            className="relative h-60 w-full border-b-8 hover:scale-[1.07] duration-1000 hover:border-[#005c97] border-[#001535] rounded-t-lg"
            src={image}
            alt=""
          />
          <p className="absolute r-0 t-0 b-0 l-0 -mt-56 ml-64 flex justify-center items-center gap-2 bg-white text-black px-5 p-2 rounded">
            <span className="text-green-700">
              <FaUser />
            </span>
            Admin
          </p>
        </div>
        <div className="flex flex-col pt-6 ">
          <div className="flex justify-between items-center pb-5 mx-2">
            <div className="flex justify-center items-center gap-4 text-green-700 text-xl">
              <button
                className={liked ? "text-green-500" : "#0000"}
                onClick={handleLikeClick}
              >
                <AiFillLike />
              </button>
              <button
                className={disliked ? "text-green-500" : "#0000"}
                onClick={handleDislikeClick}
              >
                <AiFillDislike />
              </button>
              <ToastContainer />
            </div>
            <p className="flex justify-center items-center gap-2 text-black">
              <span className="text-green-700">
                <FaComment />
              </span>
              {commentNumber} Comment
            </p>
          </div>
          <h5
            className="mb-5 text-xl font-semibold tracking-tight 
	  text-[#000000]"
          >
            {name}
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
