import { useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import toast from "react-hot-toast";

const ServiceDetail = () => {
  const { id } = useParams();
  const [data, dataLoaing] = useGetAService(id);
  if (dataLoaing) {
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-5">
      <SectionTitle heading={"Detail"} subHeading={data?.title} />
      <div className="py-20 flex md:flex-row flex-col items-center">
        <div className="md:w-1/2 overflow-hidden rounded-lg">
          <img src={data?.img} alt="" className="w-full" />
        </div>
        <div className="md:w-1/2 md:p-10 p-5 space-y-4">
          <h3 className="md:text-5xl text-4xl font-bold">{data?.title}</h3>
          <p>{data?.drescaption}</p>
          <button onClick={()=> toast.success("Service Added Successfully!")} className="btn lg:px-10 capitalize bg-gradient-to-r from-brand-color to-green-500 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full">get Service</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
