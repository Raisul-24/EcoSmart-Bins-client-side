import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { fetchService } from "../../Redux/ServiceSlice";
import { useEffect } from "react";

const Services = () => {
  const dispatch = useDispatch()
  const {service:data, isLoading:dataLoaing} = useSelector((state)=> state.services)
  useEffect(()=>{
    dispatch(fetchService(6))
  },[dispatch])
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5 mb-20">
      <SectionTitle
        heading={"Services"}
        subHeading={"Your Needs, Our Expertise."}
      />
      {dataLoaing ? (
        <div className="text-center py-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 py-20">
          {data?.map((item) => (
            <ServiceCard key={item?._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
