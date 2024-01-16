import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

    useEffect(() =>{
        Aos.init(
          {
            duration: 2000, 
          offset: 200,
          } 
        );
      },[])

    return (
        <div>
              <div className="hero min-h-screen bg-gradient-to-r from-green-100 to-slate-100 ...">
        <div  className="hero-content  flex-col-reverse md:flex-row-reverse">
          <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
          <img  src="https://i.ibb.co/BV13fHZ/banner-img-2.png"  />
          </div>
          <div className="lg:w-3/5 mr-auto" >
            <p data-aos="fade-down" className="text-lime-600 md:text-xl font-bold mb-3">Empowering Communities for a Cleaner Planet</p>
            <h1 data-aos="fade-up-right" className="text-4xl lg:text-7xl font-bold">Best waste pickup solutaions</h1>
            <p data-aos="fade-up" className="py-6 text-lg">We have already made huge strides in our sustainability journey by investing in plastic recycling and energy from waste infrastructure and low carbon collections.</p>
          
           <button className="btn text-lg bg-green-700 hover:bg-green-500 text-white">Let’s Explore</button>
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;