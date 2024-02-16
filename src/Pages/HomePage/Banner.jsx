import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="font-andika">
          <div className="hero min-h-screen bg-gradient-to-r from-green-100 to-slate-100 ...">
            <div className="hero-content  flex-col-reverse md:flex-row-reverse">
              <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
                <img src="https://i.ibb.co/BV13fHZ/banner-img-2.png" />
              </div>
              <div className="lg:w-3/5 mr-auto">
                <p
                  data-aos="fade-down"
                  className="text-brand-color md:text-xl font-bold mb-3"
                >
                  Empowering Communities for a Cleaner Planet
                </p>
                <h1
                  data-aos="fade-up-right"
                  className="text-4xl lg:text-7xl font-bold"
                >
                  Best waste pickup solutaions
                </h1>
                <p className="py-6 text-lg">
                  We have already made huge strides in our sustainability
                  journey by investing in plastic recycling and energy from
                  waste infrastructure and low carbon collections.
                </p>

                <Link to="/pickUpReq"><button className="btn bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color ">Pick up Request</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="font-andika">
          <div className="hero min-h-screen bg-gradient-to-r from-green-100 to-slate-100 ...">
            <div className="hero-content  flex-col-reverse md:flex-row-reverse">
              <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
                <img src="https://i.ibb.co/vs6R7RC/banner-img-1.png" />
              </div>
              <div className="lg:w-3/5 mr-auto">
                <p data-aos="fade-down" className="text-brand-color md:text-xl font-bold mb-3">
                  Building a Greener Future Together
                </p>
                <h1 data-aos="fade-up-right" className="text-4xl lg:text-7xl font-bold">
                  Sustainable waste management
                </h1>
                <p className="py-6 text-lg">
                  Join us in our mission to reduce waste and preserve our environment. With our innovative waste management solutions, we're making it easier than ever to make a positive impact.
                </p>

                <Link to="/pickUpReq"><button className="btn bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color ">Pick up Request</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="font-andika">
          <div className="hero min-h-screen bg-gradient-to-r from-green-100 to-slate-100 ...">
            <div className="hero-content  flex-col-reverse md:flex-row-reverse">
              <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
                <img src="https://i.ibb.co/8cvLPYm/banner-img-4.png" />
              </div>
              <div className="lg:w-3/5 mr-auto">
                <p data-aos="fade-down" className="text-brand-color md:text-xl font-bold mb-3">
                  Leading the Way in Environmental Responsibility
                </p>
                <h1 data-aos="fade-up-right" className="text-4xl lg:text-7xl font-bold">
                  Revolutionizing waste management
                </h1>
                <p className="py-6 text-lg">
                  Discover how we're pioneering sustainable solutions and driving positive change. From cutting-edge recycling initiatives to community-driven programs, we're committed to creating a cleaner, healthier planet for future generations.
                </p>


                <Link to="/pickUpReq"><button className="btn bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color ">Pick up Request</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
