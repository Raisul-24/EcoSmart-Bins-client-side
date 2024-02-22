import { Link, useParams } from "react-router-dom";
import ServiceDetailsFAQ from "../../ServiceDetail/ServiceDetailsFAQ";
import getAIndustries from "../../../API/IndustriesApi/getAIndustries";
import IndustriesDetailsSidebar from "./IndustriesDetailsSidebar";
import content from "../../../assets/images/industryContent-image.webp";
import { FaArrowCircleRight } from "react-icons/fa";

const IndustriesDetails = () => {
  const { id } = useParams();
  const [data, dataLoading] = getAIndustries(id);
  //  console.log(data);

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
          className="hero h-[550px] relative"
          style={{
            backgroundImage: `url(${data?.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="hero-content text-center text-neutral-content relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="mb-8 text-6xl font-extrabold font-sans">
                {data?.category}
              </h1>
              <p className="mb-8 px-20 text-xl text-center">
                {data?.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-9 gap-12 mx-8 xl:px-0 px-5 font-andika">
        <div className="col-span-3 mt-16">
          <IndustriesDetailsSidebar />
        </div>
        <div className="col-span-6">
          <div className="py-20 flex md:flex-row flex-col items-center">
            <div>
              <div>
                <p className="text-3xl font-extrabold pb-8">Overview</p>

                <p className=" text-lg">{data?.description1}</p>
                <div className="md:w-full my-8 overflow-hidden rounded-xl">
                  <img
                    src={data?.img}
                    alt=""
                    className="w-full overflow-scroll object-cover"
                  />
                </div>
                <p className=" text-lg pb-8">{data?.description}</p>
                <p className=" text-lg mb-8">{data?.description2}</p>
                <div className="md:flex gap-10 justify-start items-center my-20 md:w-full">
                  <img
                    src={content}
                    alt="industries details page content image"
                    className="overflow-hidden rounded-xl h-[500px] md:w-1/2"
                  />
                  <div className="md:w-1/2">
                    <p className="text-lg">
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
                      to={`/`}
                      className="mt-10 btn btn-outline text-lg font-bold rounded-md  flex justify-center items-center hover:text-white bg-gray-700 text-white hover:bg-brand-color h-[70px] gap-4 w-[340px] border-0"
                    >
                      Our Placement Guidelines
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
        </div>
      </div>
    </div>
  );
};

export default IndustriesDetails;
