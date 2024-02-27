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
        console.log("Error fetching:", error);
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

        <div className="w-fit mx-auto">
          {" "}
          <Link to={"/dashboard/addShowcase"}>
            <Btn>Share Your Waste Art</Btn>
          </Link>
        </div>
      </div>
      {/* <div className="grid grid-cols-2  gap-4 md:grid-cols-4 px-20">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/2kmJTG9/re2.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://i.ibb.co/dKsqnLR/re1.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Artwork;
