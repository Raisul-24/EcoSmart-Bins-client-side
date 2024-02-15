import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecycleMaterials = () => {
  return (
    <div className="font-andika">
      <div className="">
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: "url(https://i.ibb.co/pLwS49s/cta-bg.jpg)",
          }}
        >
          <div className="hero-overlay bg-green-950 opacity-80"></div>
          <div className="hero-content items-start justify-start  text-center">
            <div className="text-white lg:items-start">
              <h1 className="mb-5 text-4xl md:text-5xl font-bold">
                Become our customer & get <br />
                special service
              </h1>
              <div className="flex gap-5 justify-center">
                <Link to={"/contact"}>
                  {" "}
                  <button className="btn btn-primary px-5 text-lg bg-brand-color">
                    Contact Us
                  </button>
                </Link>
                <button className="btn btn-primary px-5 text-lg hover:bg-brand-color">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -left-0 -top-28 w-11/12 mx-auto rounded-xl z-10">
        <div
          className="hero h-[370px] rounded-xl"
          style={{
            backgroundImage: "url(https://i.ibb.co/56JLyPY/shape-9.png)",
          }}
        >
          <div className="hero-overlay rounded-xl bg-brand-color "></div>
          <div className="z-0 lg:w-4/5 flex flex-col md:flex-row lg:gap-60 gap-12 justify-between">
            <div className="lg:w-80 mx-auto px-5 md:px-0 text-center lg:text-start text-white">
              <p className="text-xl mb-5 font-bold">Recycle Materials</p>
              <h1 className="md:mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
                We collect, recycle & disposal all materials
              </h1>
            </div>
            <div className="flex px-5 md:gap-5 lg:gap-10">
            <div className="flex flex-col gap-2 lg:gap-5 flex-1">
             <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                <span className=""> <FaCheckCircle/> </span>
                <p>Steel</p>    
             </div>
             <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                <span className=""> <FaCheckCircle/> </span>
                <p>Plastic</p>
             </div>
             <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                <span className=""> <FaCheckCircle/> </span>
                <p>Lights & Bulbs</p>
             </div>
             <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                <span className=""><FaCheckCircle/> </span>
                <p>Books & Papers</p>
             </div>
             <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                <span className=""><FaCheckCircle/> </span>
                <p>Bottles</p>
             </div>
            </div>

              <div className="">
                <div className="flex flex-col gap-5 flex-1">
                  <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                    <span className="">
                      <FaCheckCircle />{" "}
                    </span>
                    <p>Food & Grocery</p>
                  </div>
                  <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                    <span className="">
                      <FaCheckCircle />{" "}
                    </span>
                    <p>Common Waste</p>
                  </div>
                  <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                    <span className="">
                      <FaCheckCircle />{" "}
                    </span>
                    <p>Newspaper</p>
                  </div>
                  <div className="text-slate-100 flex gap-2 md:gap-5 items-center">
                    <span className="">
                      <FaCheckCircle />{" "}
                    </span>
                    <p>Food & Grocery</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleMaterials;
