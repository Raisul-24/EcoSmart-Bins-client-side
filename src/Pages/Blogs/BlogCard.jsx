import PropTypes from "prop-types";
import { FaComment, FaUser } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogCard = ({ blog }) => {
  const { _id, image, name, shortDescription } = blog || {};

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    setLiked(true);
    setDisliked(false);
    showToast("Liked");
  };

  const handleDislikeClick = () => {
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
        className="bg-white border flex flex-col h-full  p-4 border-white rounded-lg 
	 shadow-2xl pb-4 font-montserrat"
      >
        <div className="">
          <img
            className="relative h-60 w-full border-b-8 hover:scale-[1.07] duration-1000 hover:border-[#005c97] border-[#001535] rounded-t-lg"
            src={image}
            alt=""
          />
          <p className="absolute top-1 right-0 flex justify-end items-center gap-2 text-black font-bold px-5 p-2 rounded bg-slate-400 bg-opacity-50 mt-3 mr-4 ">
            <span className="text-green-700">
              <FaUser />
            </span>
            Admin
          </p>
        </div>
        <div className="flex flex-col pt-6 ">
          <div className="flex justify-between items-center pb-5 mx-2">
            <div className="flex justify-center items-center gap-6 text-green-700 text-xl">
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

            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn flex justify-center items-center ml-32 border-0  text-black"
                >
                  <span className="text-green-700">
                    <FaComment />
                  </span>
                  Comment
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className=" p-4 w-96 min-h-full bg-white text-base-content">
                  {/* Sidebar content here */}
                </div>
              </div>
            </div>
          </div>

          <h5 className="mb-5 text-xl font-semibold tracking-tight text-[#000000] h-9">
            {name}
          </h5>

          <p className="mb-3 font-normal text-[#370000]">{shortDescription}</p>
          <div className="flex mt-auto justify-center items-center">
            <button className="flex mt-auto w-full text-center ">
              <Link
                to={`/blog/${_id}`}
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
