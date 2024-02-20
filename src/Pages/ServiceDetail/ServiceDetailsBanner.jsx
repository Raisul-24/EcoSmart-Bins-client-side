import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";

const ServiceDetailsBanner = () => {
  const { id } = useParams();
  const [data] = useGetAService(id);
  return (
    <div>
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
    </div>
  );
};

export default ServiceDetailsBanner;
