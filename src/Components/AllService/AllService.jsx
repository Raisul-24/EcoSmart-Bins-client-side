import collection from "../../assets/images/pickup.png";
import time from "../../assets/images/time.png";
import shop from "../../assets/images/shop.png";
import { useDispatch, useSelector } from "react-redux";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { fetchService } from "../../Redux/ServiceSlice";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Service = () => {
  const dispatch = useDispatch();
  const { service: data, isLoading: dataLoaing } = useSelector(
    (state) => state.services
  );
  useEffect(() => {
    dispatch(fetchService(6));
  }, [dispatch]);

  return (
    <div className="font-andika">
      <div className="max-w-7xl mx-auto xl:px-0 px-5">
        <div className="md:flex gap-20 w-fit mx-auto bg-white mt-20 ">
          <motion.div
            className="md:w-1/3 sm:w-1/2 w-72 text-center lg:p-10 relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={collection} alt="" className="w-20 mx-auto" />
            <h3 className="text-2xl font-bold my-2 ">Waste collection</h3>
            <p>
              Streamline your waste management with our efficient Waste
              Collection service.
            </p>
            <motion.div className="rounded-t-3xl absolute inset-0 flex items-center justify-center bg-brand-color bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to={"/services"}>
                <button className="bg-white text-black px-4 py-2 rounded hover:text-brand-color hover:font-bold transition-colors duration-300">
                  See Details
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/3 sm:w-1/2 w-72 text-center lg:p-10 relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={time} alt="" className="w-20 mx-auto" />
            <h3 className="text-2xl font-bold my-2 ">Pickup Schedule</h3>
            <p>
              Effortlessly schedule pickups for your waste with our convenient
              Pickup Schedule service
            </p>
            <motion.div className="rounded-t-3xl absolute inset-0 flex items-center justify-center bg-brand-color bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to={"/pickUpReq"}>
                <button className="bg-white text-black px-4 py-2 rounded hover:text-brand-color hover:font-bold transition-colors duration-300">
                  See Details
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/3 sm:w-1/2 w-72 text-center lg:p-10 relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={shop} alt="" className="w-20 mx-auto" />
            <h3 className="text-2xl font-bold my-2 ">Sustainable Store</h3>
            <p>
              Browse our curated collection of eco-friendly products designed to
              help you reduce, reuse, and recycle with ease.
            </p>
            <motion.div className="absolute rounded-t-3xl inset-0 flex items-center justify-center bg-brand-color bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to={"/shop"}>
                <button className="bg-white text-black px-4 py-2 rounded hover:text-brand-color hover:font-bold transition-colors duration-300">
                  See Details
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <h2 className="text-center pt-5 lg:mt-20 text-4xl font-bold  text-[#101a30] mb-5">
          Our Services
        </h2>
        <p className=" text-xl text-center text-brand-color font-semibold mb-10 ">
          Comprehensive Waste Solutions
        </p>

        <div className="my-20 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dataLoaing ? (
              <div className="text-center py-20 ">
                <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 py-20 bg-white">
                {data?.map((item) => (
                  <SwiperSlide key={item?._id}>
                    <ServiceCard data={item}></ServiceCard>
                  </SwiperSlide>
                ))}
              </div>
            )}
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
