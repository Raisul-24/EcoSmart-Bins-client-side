import { Link, useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";
import toast from "react-hot-toast";
import {
  FaArrowCircleRight,
  FaFacebookMessenger,
  FaPhoneAlt,
} from "react-icons/fa";
import getServicesCategories from "../../API/BlogApi/getServicesCategory";
import sidebarBg from "../../assets/images/sideber-of-service-details.webp";
const ServiceDetail = () => {
  const [categories] = getServicesCategories();
  console.log(categories);
  const { id } = useParams();
  const [data, dataLoading] = useGetAService(id);
  if (dataLoading) {
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="font-andika">
      <div
        className="hero h-[700px] relative"
        style={{
          backgroundImage: `url(${data?.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="mb-8 text-5xl font-bold font-sans">{data?.title}</h1>
            <p className="mb-8 px-20 text-center">{data?.shortDescription}</p>
            <div className="mt-5 flex justify-center items-center gap-10">
              <Link
                to={`/pickUpReq`}
                className=" btn btn-outline text-lg font-sans font-bold rounded-md text-black flex justify-center items-center hover:text-white bg-white  hover:bg-[#f0901f] h-[70px] gap-4 w-[250px] border-0"
              >
                Request PickUp
                <span className="text-3xl">
                  <FaArrowCircleRight />
                </span>
              </Link>
              <Link
                to={`/priceTable`}
                className="btn btn-outline text-lg font-sans font-bold border-0 rounded-md  flex justify-center items-center hover:text-white text-white hover:bg-[#f0901f] bg-[#257830] h-[70px] gap-4 w-[250px]"
              >
                Packages & Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-9 gap-12 mx-8 xl:px-0 px-5 font-andika">
        {/* sidebar content */}
        <div className="col-span-3 mt-16">
          {/* categories buttons part 1 */}
          <div className="rounded-xl p-10 bg-[#e9f1ea] mt-4">
            <p className="text-xl font-extrabold py-5">Our Services</p>
            {categories?.map((category) => (
              <button key={category?._id}>
                <Link
                  to={`/services/${data?._id}`}
                  className="h-16 px-8 bg-[#182822] hover:bg-[#257830]
                      rounded-md text-start w-72 flex justify-start items-center
                      gap-4 text-white text-md font-bold mb-6"
                >
                  <span className="text-2xl">
                    <FaArrowCircleRight />
                  </span>
                  {category?.servicesCategory}
                </Link>
              </button>
            ))}
          </div>
          {/* content with get start button part 2 */}
          <div
            className="mt-12 h-[550px] relative flex flex-col justify-center items-start gap-6 text-white overflow-hidden rounded-xl"
            style={{
              backgroundImage: `url(${sidebarBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#f29829] bg-opacity-95"></div>

            <div className="flex flex-col justify-center items-start gap-6  relative z-10 px-12">
              <h4 className="text-2xl font-bold pb-2">
                Trusted And Reliable <br /> Waste Collection!
              </h4>
              <p className="text-lg font-semibold">
                We offer customers regular collection of trash, on a scheduled
                or call basis, with a safe level of service.
              </p>
              <Link
                to={`/`}
                className="mt-6 btn btn-outline text-lg font-bold rounded-md text-black flex justify-center items-center hover:text-white bg-white hover:bg-brand-color h-[70px] gap-4 w-full border-0"
              >
                Get Started Now
                <span className="text-3xl">
                  <FaArrowCircleRight />
                </span>
              </Link>
              <div className="flex flex-col justify-center items-start gap-4 mt-8">
                <p className="text-xl font-bold flex justify-center items-center gap-5 hover:text-brand-color">
                  <span className="text-xl">
                    <FaFacebookMessenger />
                  </span>
                  ecosmart@bin.com
                </p>
                <p className="text-xl font-bold flex justify-center items-center gap-5 hover:text-brand-color">
                  <span className="text-xl">
                    <FaPhoneAlt />
                  </span>
                  +2 01161145741
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* main content part */}
        <div className=" col-span-6">
          <div className="py-20 flex md:flex-row flex-col items-center">
            <div className="">
              <p className="text-3xl font-extrabold pb-8">Overview</p>

              <p className=" text-lg">{data?.description1}</p>
              <div className="md:w-full my-8 overflow-hidden rounded-xl">
                <img
                  src={data?.img}
                  alt=""
                  className="w-full overflow-scroll object-cover"
                />
              </div>
              <p className=" text-lg">{data?.description2}</p>

              <div className="md:w-full my-8 overflow-hidden rounded-xl flex justify-center items-center gap-12 object-cover">
                <img
                  src={data?.img1}
                  alt=""
                  className="w-full h-96 rounded-xl overflow-scroll"
                />
                <img
                  src={data?.img2}
                  alt=""
                  className="w-full h-96 rounded-xl overflow-scroll"
                />
              </div>
              <div className="my-8">
                <p className="text-3xl font-extrabold pb-8">Key Benefits</p>
                <p className=" text-lg">
                  We’ve been helping cities, utilities, automakers, EVSE
                  suppliers and commercial businesses take advantage of clean
                  energy benefits that smart charging infrastructure affords.
                  Our solutions deliver savings to drivers, businesses and grid
                  operators.
                </p>
              </div>
              <div className="border-b-4 border-brand-color mb-5"></div>

              <div>
                <div className="collapse collapse-plus rounded-lg  text-[#101a30] hover:text-brand-color">
                  <input type="checkbox" name="accordion" />
                  <div className="collapse-title  text-xl font-bold">
                    <p>Food Recycling And Anaerobic Digestion</p>
                  </div>
                  <div className="collapse-content">
                    <p>
                      Recycling Facilities essential in providing quality raw
                      materials to the production industry, as they designed to
                      separate recyclables into their individual material
                      streams and prepare them for sale
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-lg  text-[#101a30] hover:text-brand-color">
                  <input type="checkbox" name="accordion" />
                  <div className="collapse-title  text-xl font-bold">
                    <p>Mechanical And Biological Treatment</p>
                  </div>
                  <div className="collapse-content">
                    <p>
                      Recycling Facilities essential in providing quality raw
                      materials to the production industry, as they designed to
                      separate recyclables into their individual material
                      streams and prepare them for sale
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus rounded-lg  text-[#101a30] hover:text-brand-color">
                  <input type="checkbox" name="accordion" />
                  <div className="collapse-title  text-xl font-bold">
                    <p>Metal And Plastic Recycling Facilities</p>
                  </div>
                  <div className="collapse-content">
                    <p>
                      Recycling Facilities essential in providing quality raw
                      materials to the production industry, as they designed to
                      separate recyclables into their individual material
                      streams and prepare them for sale
                    </p>
                  </div>
                </div>
              </div>
              {/*<button
                onClick={() => toast.success("Service Added Successfully!")}
                className="btn lg:px-10 capitalize bg-gradient-to-r from-brand-color to-green-500 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-1/2"
              ></button>*/}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
