import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { useState } from "react";
import banner from "../../assets/BannerImages/priceBanner.webp";
import { motion } from "framer-motion";
import img1 from "../../assets/images/shape-4.png";
import img2 from "../../assets/images/shape-5.png";
import useAxiosPublic from "../../axios/axiosPublic";
import Btn from "../../Components/Btn";
import GetData from "../../Hooks/GetDataHook";
import useAuth from "../../Hooks/UseAuth";

const PriceTable = () => {
  const { user } = useAuth();
  const [data, dataLoaing] = GetData("./priceTable.json");
  const [isYearly, setIsYearly] = useState(false);
  const axiosPublic = useAxiosPublic();
  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };
  const handleClick = async (item) => {
    const price = isYearly ? item?.price * 9 : item?.price;
    const subscriptionTime = isYearly ? "year" : "Month";
    const name = user?.displayName;
    const email = user?.email;
    const status = item?.status.toLowerCase();
    const subscriptionData = { price, subscriptionTime, name, email, status };
      axiosPublic.patch("/subscription",subscriptionData).then((res) => {
      window.location.replace(res.data.url);
    });
  };
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
          className="lg:bottom-10 lg:left-20 bottom-5 left-5 absolute hidden md:block "
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        >
          <motion.img src={img1} alt="Zooming Image" className="w-24 lg:w-32" />
        </motion.div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Our Pricing</h1>
            <p className="mb-5">
              Choose the Plan That Fits Your Needs and Budget
            </p>
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
            ease: "linear",
          }}
          originX={0.5}
          originY={0.5}
        >
          <motion.img src={img2} alt="Rotating Image" className="w-24 h-24" />
        </motion.div>
      </div>

      {/*content  */}
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-center text-green-600 my-5">
          Pricing Table
        </h2>
        <div className="flex justify-center">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-center text-black my-5 w-1/2">
            Not any hidden charge, choose our pricing plan
          </h2>
        </div>
        <div className="my-5 flex justify-center">
          <span className="text-xl font-extrabold mr-4">Monthly</span>
          <HeartSwitch
            size="lg"
            inactiveTrackFillColor="#ebfdc9"
            inactiveTrackStrokeColor="#07f92e"
            activeTrackFillColor="#70ff76"
            activeTrackStrokeColor="#4fff51"
            inactiveThumbColor="#ecfeff"
            activeThumbColor="#294B29"
            checked={isYearly}
            onChange={handleToggle}
          />
          <span className="text-xl font-extrabold ml-4">Yearly</span>
        </div>

        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-6">
          {/* cards 1*/}
          {dataLoaing ? (
            <div className="text-center py-20">
              <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
            </div>
          ) : (
            data?.map((item) => (
              <div
                key={item?.id}
                className="relative flex md:max-w-96 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img
                    className="md:max-w-96 md:h-64 h-72 w-full"
                    src={item?.img}
                    alt="ui/ux review check"
                  />
                </div>
                <p
                  className={`absolute rotate-[-90deg] top-24 ${
                    item?.status === "Platinum"
                      ? "-left-8 text-[#E5E4E2]"
                      : "-left-4"
                  } uppercase font-bold bg-brand-color  ${
                    item?.status === "Silver" && "text-[#C4CACE]"
                  } ${
                    item?.status === "gold" && "text-[#ffd700]"
                  } p-4 rounded-b-lg`}
                >
                  {item?.status}
                </p>
                <div className="text-xl text-center text-black py-8">
                  <h2>Holds: {item?.holds}</h2>
                  <h2 className="my-2">Serves: {item?.serves}</h2>
                  <h2>Max Weight: {item?.maxWeight}</h2>
                  <h2 className="my-2">Service: {item?.service}</h2>
                  <h2 className="text-5xl text-green-600 font-extrabold mt-4 mb-2">
                    {isYearly ? item?.price * 9 : item?.price} tk
                  </h2>
                  <h2>Per {isYearly ? "year" : "month"}</h2>
                  <Btn onClick={() => handleClick(item)} className="my-7">
                    Select Plan
                  </Btn>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
