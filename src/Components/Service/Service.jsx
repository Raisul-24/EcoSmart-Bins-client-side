import useGetService from "../../API/ServiceApi/useGetService";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const [data, dataLoaing] = useGetService(6)
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5">
      <div className="flex justify-center">
        <h3 className="w-fit capitalize pt-5 pb-2 text-4xl border-b-4 border-[#3A9E1E] mb-10 font-semibold text-[#101a30]">
          our services
        </h3>
      </div>
      {dataLoaing ? (
        <div className="text-center">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 pb-20">
            {
                data?.map(item=><ServiceCard key={item?._id} data={item}/>)
            }
        </div>
      )}
    </div>
  );
};

export default Service;
