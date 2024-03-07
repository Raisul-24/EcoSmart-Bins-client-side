import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCalendar2DateFill } from "react-icons/bs";

const BlogCard = ({ blog }) => {
  const { _id, image, name, description, date } = blog || {};
  //  const [isDetails, setIsDetails] = useState(true);

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
      <div className="mb-20">
        <div className="overflow-hidden rounded-2xl">
          <img
            className="h-full w-full mb-2 rounded-2xl hover:scale-[1.07] duration-1000   rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="md:flex justify-between items-center pb-5 ">
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
            <button className="btn flex justify-center items-center gap-2 text-black font-bold px-5 text-lg rounded border-0 overflow-hidden">
              <span className="text-green-700 text-2xl">
                <BsCalendar2DateFill />
              </span>
              {date}
            </button>
            <div>
              <p className="flex justify-end items-center gap-2 text-black font-bold px-5 p-2 rounded mr-4">
                <span className="text-green-700 text-lg">
                  <FaUser />
                </span>
                Admin
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-2 justify-center items-start">
            <h5 className=" text-4xl font-serif font-bold tracking-tight pb-4">
              {name}
            </h5>
            <p className="mb-3 font-normal text-[#370000]">{description}</p>
            <Link
              to={`/blog/${_id}`}
              className="text-3xl hover:text-brand-color "
            >
              <FaArrowRightLong />
            </Link>
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
