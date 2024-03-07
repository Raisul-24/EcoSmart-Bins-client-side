import {
  FaArrowCircleRight,
  FaFacebookMessenger,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import sidebarBg from "../../assets/images/sideber-of-service-details.webp";
import getServicesCategories from "../../API/BlogApi/getServicesCategory";

const ServiceDetailsSidebar = () => {
  const [categories, isPending] = getServicesCategories();
  if (isPending) {
    return;
  }
  return (
    <>
      {/* part 1 categories buttons */}
      <div className="rounded-xl p-10 bg-[#e9f1ea] mt-4 ">
        <p className="text-2xl md:text-center font-bold py-5 mb-5">Our Services</p>
        {categories?.map((category) => (

          <ul className="h-12 " key={category?._id}>
            <li className=" md:w-72 font-bold md:text-center px-4">

              {category?.servicesCategory}
            </li>
          </ul>
        ))}
      </div>
      {/* part 2 content with get start button */}
      <div
        className="mt-12 h-[550px] relative flex flex-col justify-center items-start gap-6 text-white overflow-hidden rounded-xl"
        style={{
          backgroundImage: `url(${sidebarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#f29829] bg-opacity-95"></div>

        <div className="flex flex-col justify-center items-start gap-6 relative z-10 md:px-12 px-8">

          <h4 className="text-2xl font-bold pb-2">
            Trusted And Reliable <br /> Waste Collection!
          </h4>
          <p className="text-lg font-semibold">
            We offer customers regular collection of trash, on a scheduled or
            call basis, with a safe level of service.
          </p>
          <Link
            to={`/pickUpReq`}

            className="mt-6 btn btn-sm btn-outline text-lg font-bold rounded-md text-black flex justify-center items-center hover:text-white bg-white hover:bg-brand-color md:h-[70px] gap-4 w-full border-0"

          >
            Get Started Now
            <span className="md:text-3xl">
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
    </>
  );
};

export default ServiceDetailsSidebar;
