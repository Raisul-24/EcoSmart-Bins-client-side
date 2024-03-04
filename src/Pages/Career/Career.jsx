import banner from "../../assets/BannerImages/careerBanner.webp";
import { motion } from 'framer-motion';
import img1 from "../../assets/images/shape-4.png"
import img2 from "../../assets/images/shape-5.png"
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import Btn from "../../Components/Btn";


const Career = () => {
  const { data: career, isLoading: isPending } = useGetApiQuery("/career");

  if (isPending)
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  return (
    <div>
      <div className="hero h-96 relative" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <motion.div
          className="lg:bottom-10 lg:left-20 bottom-5 left-5 absolute hidden md:block "
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
            className="lg:w-32 w-24"
          />
        </motion.div>
        <div className="hero-content text-center text-neutral-content relative z-10  ">

          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Career</h1>
            <p className="mb-5">Start Your Green Career Here</p>
          </div>

        </div>
        <motion.div
          className="absolute top-5 right-5 lg:top-20 lg:right-40 hidden md:block"
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
      <div className="my-20 mx-20">
        <div className="text-center">
          <p className="text-lg text-brand-color">WE’RE HIRING</p>
          <h2 className="text-4xl font-bold py-10">Join With Our Family</h2>
          <p>Joining the EcoSmartBins team means becoming part of a dynamic and forward-thinking organization that values its employees and fosters a culture of collaboration, innovation, and continuous improvement. We offer competitive salaries, comprehensive benefits packages, and ample opportunities for career growth and advancement</p>
        </div>
        <div className="lg:flex justify-evenly mt-20">
          {
            career?.map((item) => (<div key={item?.id}>
              <div className="w-96 bg-gray-100 p-10 hover:bg-white hover:drop-shadow-2xl hover:shadow-brand-color h-">
                <p className="bg-brand-color px-2 py-1 w-fit text-white">Full time</p>
                  <h2 className="mt-8 mb-4 text-center text-2xl font-semibold">{item.position}</h2>
                  <p className="text-center border-b-2 border-brand-color pb-3">Minimum 2 Yrs Exp</p>
                  <p className="my-5 text-sm">{item.short_description}</p>
                  <p className="text-red-500 my-8 ">Apply until: {item.apply_deadline}</p>
                  
                  <Btn className="w-full"> See Job Details</Btn>
                  
              </div>
            </div>))
          }
        </div>
      </div>
    </div>
  );
};

export default Career;