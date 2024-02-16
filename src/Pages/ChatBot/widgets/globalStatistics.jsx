import { useGetApiQuery } from "../../../Redux/userApi/getApi";

const GlobalStatistics = () => {
  const { data } = useGetApiQuery("/services");
  return (
    <div className="service">
      <h3 className="capitalize text-xl font-bold border-b">services</h3>
      {data?.map((service, idx) => (
        <div key={idx} className="flex ">
          <p className="my-2 pr-2">{++idx}:</p>
          <p className="my-2">{service?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GlobalStatistics;
