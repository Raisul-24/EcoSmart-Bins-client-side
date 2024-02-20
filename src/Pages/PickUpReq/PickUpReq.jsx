import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PickUpForm from "./PickUpForm";
import banner from "../../assets/BannerImages/picupBanner.webp";
import { motion } from 'framer-motion';
import img1 from "../../assets/images/shape-4.png"
import img2 from "../../assets/images/shape-5.png"

const PickUpReq = () => {
  return (
    <div className="font-andika">
      {/* banner */}
      <div className="hero h-96 relative" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
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
        <div className="hero-content text-center text-neutral-content relative z-10  ">

          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Request Pickup</h1>
            <p className="mb-5">Effortlessly Schedule Waste Collection</p>
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
      <SectionTitle heading="Request Pickup"
        subHeading="24 Hour">
      </SectionTitle>
      <PickUpForm />

    </div>
  );
};

export default PickUpReq;