import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { fetchService } from "../../Redux/ServiceSlice";
import { useEffect } from "react";

const Services = () => {
  const dispatch = useDispatch()
  const { service: data, isLoading: dataLoading } = useSelector((state) => state.services)
  useEffect(() => {
    dispatch(fetchService(6))
  }, [dispatch])
  return (
    <div className="font-andika">
      {/* banner */}
      <div className="hero h-96 relative" style={{ backgroundImage: 'url(https://i.imgur.com/WTXqvCy.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Services We Offer</h1>
            <p className="mb-5">Explore Our Waste Management Solutions.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto xl:px-0 px-5 mb-20">
        <SectionTitle
          heading={"Your Needs, Our Expertise."}
        />
        {dataLoading ? (
          <div className="text-center py-20">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mx-8 py-20">
            {data?.map((item) => (
              <ServiceCard key={item?._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
