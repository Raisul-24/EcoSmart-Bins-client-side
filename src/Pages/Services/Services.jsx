import useGetService from "../../API/ServiceApi/useGetService";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = () => {
  const [data, dataLoaing] = useGetService();
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
