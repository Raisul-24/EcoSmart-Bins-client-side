import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { fetchService } from "../../Redux/ServiceSlice";
import { useEffect } from "react";
import banner from "../../assets/BannerImages/serviceBanner.jpg";
import { motion } from 'framer-motion';
import img1 from "../../assets/images/shape-4.png"
import img2 from "../../assets/images/shape-5.png"

const Services = () => {
  const dispatch = useDispatch();
  const { service: data, isLoading: dataLoading } = useSelector(
    (state) => state.services
  );
  useEffect(() => {
    dispatch(fetchService(6));
  }, [dispatch]);
  return (
    <div className="font-andika">
      {/* banner */}
      <div
        className="hero h-96 relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <motion.div
          className="bottom-10 left-20 absolute "
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        >
          <motion.img
            src={img1}
            alt="Zooming Image"
            className="w-32"
          />
        </motion.div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Services We Offer</h1>
            <p className="mb-5">Explore Our Waste Management Solutions.</p>
          </div>
        </div>
        <motion.div
          className="absolute top-20 right-40 "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          originX={0.5}
          originY={0.5}
        >
          <motion.img
            src={img2}
            alt="Rotating Image"
            className="w-24 h-24"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto xl:px-0 px-5 mb-20">
        <SectionTitle heading={"Your Needs, Our Expertise."} />
        {dataLoading ? (
          <div className="text-center py-20">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mx-8 py-20">
            {data?.map((item) => (
              <ServiceCard key={item?._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
