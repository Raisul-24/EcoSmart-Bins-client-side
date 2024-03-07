import { useEffect, useState } from "react";
import useAxiosPublic from "../../../axios/axiosPublic";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Btn from "../../../Components/Btn";

const Artwork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [artworks, setArtworks] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/artworks")
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((error) => {
      });
  }, [axiosPublic]);

  return (
    <div className="bg-slate-50 mb-10 font-andika">
      <div className=" xl:px-0 px-5  lg:py-20">
        <h2 className=" text-center pt-5 text-4xl font-bold  text-[#101a30] mb-5">
          Welcome to Our Waste Art Showcase!
        </h2>
        <p className="text-xl text-brand-color text-center font-semibold mb-10">
          Discover the Beauty of Waste Transformation
        </p>
        <p className="w-2/3 mx-auto text-center text-xl mb-20">
          At SmartEcoBin, we celebrate creativity that knows no bounds. Our
          Waste Art Showcase is a vibrant gallery where individuals turn
          everyday waste into extraordinary masterpieces. Explore the gallery
          below to witness the transformative power of art and sustainability.
        </p>

        <Swiper
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4.1,
            },
          }}
          spaceBetween={2}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
         
        >
          {artworks?.map((artwork, index) => (
            <SwiperSlide key={artwork._id}>
              <div className="">
                <div
                  className="relative md:mb-10"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={artwork.img} alt="" className="h-72 w-full" />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-white text-center">
                        <p className="text-xl font-bold">
                          Artist: {artwork.name}
                        </p>
                        <p className="text-lg capitalize">{artwork.title}</p>
                        <p className="">Date: {artwork.date}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-fit mx-auto mt-10">
          {" "}
          <Link to={"/addShowcase"}>
            <Btn>Share Your Waste Art</Btn>
          </Link>
        </div>
      </div>
      

    </div>
  );
};

export default Artwork;
