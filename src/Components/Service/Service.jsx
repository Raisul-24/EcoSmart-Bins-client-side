import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchService } from "../../Redux/ServiceSlice";

const Service = () => {
  const dispatch = useDispatch()
  const { service: data, isLoading: dataLoaing } = useSelector((state) => state.services)
  useEffect(() => {
    dispatch(fetchService(6))
  }, [dispatch])
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5">
      
        <h2 className="text-center pt-5 text-4xl font-bold  text-[#101a30] mb-5">Our Services</h2>
        <p className="text-xl text-center text-brand-color font-semibold mb-10">What We Do</p>
     
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
