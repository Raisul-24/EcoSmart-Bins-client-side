import { useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";

const ServiceDetailsDescription = () => {
  const { id } = useParams();
  const [data] = useGetAService(id);
  return (
    <div>
      <p className="text-3xl font-extrabold pb-8 md:px-8 px-12">Overview</p>

      <p className=" text-lg">{data?.description1}</p>
      <div className="md:w-full my-8 mx-6 overflow-hidden rounded-xl">
        <img
          src={data?.img}
          alt=""
          className="w-full overflow-scroll object-cover"
        />
      </div>
      <p className=" md:text-lg px-5">{data?.description2}</p>

      <div className="md:w-full my-8 overflow-hidden rounded-xl md:flex justify-center items-center gap-12 object-cover px-6">
        <img
          src={data?.img1}
          alt=""
          className="wmd:-full md:h-96 rounded-xl overflow-scroll"
        />
        <img
          src={data?.img2}
          alt=""
          className="w-full h-96 rounded-xl overflow-scroll"
        />
      </div>
      <div className="my-8">
        <p className="md:text-3xl font-extrabold pb-8 px-6 mx-5">Key Benefits</p>
        <p className="mx-5 text-lg">
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
