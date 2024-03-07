import { useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";

const ServiceDetailsDescription = () => {
  const { id } = useParams();
  const [data] = useGetAService(id);
  return (
    <div className="px-4">
      <p className="text-3xl font-extrabold pb-8 ">Overview</p>

      <p className="md:text-lg">{data?.description1}</p>
      <div className="md:w-full my-8 overflow-hidden rounded-xl">
        <img
          src={data?.img}
          alt=""
          className="md:w-full overflow-scroll object-cover"
        />
      </div>
      <p className="md:text-lg">{data?.description2}</p>

      <div className="md:w-full my-8 overflow-hidden rounded-xl md:flex justify-center items-center gap-12 object-cover">
        <img
          src={data?.img1}
          alt=""
          className="md:w-full md:h-96 rounded-xl overflow-scroll mb-4"
        />
        <img
          src={data?.img2}
          alt=""
          className="md:w-full md:h-96 rounded-xl overflow-scroll mb-4"
        />
      </div>
      <div className="my-8">
        <p className="md:text-3xl text-lg font-bold pb-8">
          Key Benefits
        </p>
        <p className="md:text-lg">
          We’ve been helping cities, utilities, automakers, EVSE suppliers and
          commercial businesses take advantage of clean energy benefits that
          smart charging infrastructure affords. Our solutions deliver savings
          to drivers, businesses and grid operators.md:
        </p>
      </div>
      <div className="border-b-4 border-brand-color mb-5"></div>
    </div>
  );
};

export default ServiceDetailsDescription;
