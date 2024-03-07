import { Link, useParams } from "react-router-dom";
import ServiceDetailsFAQ from "../../ServiceDetail/ServiceDetailsFAQ";
import getAIndustries from "../../../API/IndustriesApi/getAIndustries";
import IndustriesDetailsSidebar from "./IndustriesDetailsSidebar";
import content from "../../../assets/images/industryContent-image.webp";
import { FaArrowCircleRight } from "react-icons/fa";
import Btn from "../../../Components/Btn";

const IndustriesDetails = () => {
  const { id } = useParams();
  const [data, dataLoading] = getAIndustries(id);

  if (dataLoading) {
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="font-andika">
        <div>
        <div
          className="hero md:h-[550px] h-96 relative"
          style={{
            backgroundImage: `url(${data?.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
          <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="md:hero-content text-center text-neutral-content relative z-10">
            <div className="md:max-w-3xl text-white">
              <h1 className="mb-8 md:text-6xl text-xl font-bold font-sans">
                {data?.category}
              </h1>
              <p className="mb-8 md:px-20 px-5 text-center">
                {data?.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:grid grid-cols-9 gap-12 xl:px-0 px-5 font-andika">
        <div className="col-span-3 mt-16">
          <IndustriesDetailsSidebar />
        </div>
        <div className="md:col-span-6">
          <div className="py-20 px-5 md:flex md:flex-row flex-col items-center">
            <div>
              <div className="px-4">
                <p className="text-3xl font-extrabold pb-8">Overview</p>

                <p className="md:text-lg">{data?.description1}</p>
                <div className="md:w-full my-8 overflow-hidden rounded-xl">
                  <img
                    src={data?.img}
                    alt=""
                    className="md:w-full overflow-scroll object-cover"
                  />
                </div>
                <p className="md:text-lg pb-8">{data?.description}</p>
                <p className="md:text-lg pb-8">{data?.description2}</p>
                <div className="md:flex gap-10 justify-start items-center my-20 md:w-full">
                  <img
                    src={content}
                    alt="industries details page content image"
                    className="overflow-hidden rounded-xl md:h-[500px] md:w-1/2 mb-6"
                  />
                  <div className="md:w-1/2">
                    <p className="md:text-lg">
                      We provide professional maintenance and spares management
                      package which is designed to support essential fueling
                      operations and includes around the clock technical support
                      in local languages, one-hour response, same-day dispatch
                      and 24-hour resolution commitments as well as parts
                      coverage.
                      <br /> <br /> Besides, fleet software keeps vehicles
                      charged and ready with optimized fueling through dynamic
                      depot charging optimization, comprehensive take-home
                      vehicle charging management.
                    </p>
                    <Link
                      to={`/priceTable`}
                      className="mt-10 btn btn-sm btn-outline md:text-lg font-bold rounded-md  flex justify-center items-center hover:text-white bg-gray-700 text-white hover:bg-brand-color md:h-[70px] gap-4 md:w-[340px] border-0"
                    >
                      Our Placement
                      <span className="text-2xl">
                        <FaArrowCircleRight />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="my-8">
                  <p className="text-3xl font-extrabold pb-8">Key Benefits</p>
                  <p className=" text-lg">
                    We’ve been helping cities, utilities, automakers, EVSE
                    suppliers and commercial businesses take advantage of clean
                    energy benefits that smart charging infrastructure affords.
                    Our solutions deliver savings to drivers, businesses and
                    grid operators.
                  </p>
                </div>
                <div className="border-b-4 border-brand-color mb-5"></div>
              </div>
              <div className="mt-8">
                <ServiceDetailsFAQ />
              </div>
            </div>
          </div>
          <Link to={"/pickUpReq"}>
            <Btn className="btn mb-16 ml-12 md:ml-0 border-0 text-lg bg-gradient-to-r from-brand-color to-green-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color text-white">
              Get Service
            </Btn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesDetails;
