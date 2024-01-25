import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAxiosPublic from "../../axios/axiosPublic";
import { FaArrowRight } from "react-icons/fa";


const Star = (
  <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
);

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#84cc16",
  inactiveFillColor: "#bef264",
};

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log("Error fetching:", error);
      });
  }, [axiosPublic]);

  return (
    <div className="bg-gray-50">
      <div className="md:flex  items-center">
        <div className="flex-1 w-5/6 p-10">
          <h2 className="text-3xl lg:text-5xl font-bold">What Our Clients Say About Us</h2>
          <p className="text-xl md:w-4/5  my-5">
            We Devote Time And Effort To Provide Quality Services.
          </p>
          <span className="text-amber-500 text-5xl">
            <FaArrowRight />
          </span>
        </div>

        <Swiper
         spaceBetween={30}
         centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[ Autoplay]}
          className="mySwiper flex-1"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-10 md:ml-5 md:my-16  p-5  border shadow-lg shadow-brand-color  flex flex-col  text-center items-center ">
                <Rating
                  style={{ maxWidth: 180 }}
                  itemStyles={customStyles}
                  value={review.rating}
                  readOnly
                />
                <p className="py-5 font-semibold text-gray-500">
                  {review?.date}
                </p>
                <h3 className="text-xl md:text-3xl font-semibold text-amber-500">
                  {review?.title}
                </h3>
                <p className="py-5  md:text-lg">{review?.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
