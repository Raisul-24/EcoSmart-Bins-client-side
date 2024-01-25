import { Link } from "react-router-dom";
import useGetService from "../../API/ServiceApi/useGetService";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const [data, dataLoaing] = useGetService(6);
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5">
      <div data-aos="fade-up" data-aos-duration="700" className="flex justify-center">
        <h3 className="w-fit capitalize pt-5 pb-2 text-4xl border-b-4 border-[#3A9E1E] mb-10 font-semibold text-[#101a30]">
          our services
        </h3>
      </div>
      {dataLoaing ? (
        <div className="text-center">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 pb-5">
            {data?.map((item) => (
              <ServiceCard key={item?._id} data={item} />
            ))}
          </div>
          <div className="text-center pb-10">
            <Link
              to={"/services"}
              className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color"
            >
              see All service
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
