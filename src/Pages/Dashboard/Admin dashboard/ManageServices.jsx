import toast from "react-hot-toast";
import useGetService from "../../../API/ServiceApi/useGetService";
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import useAxiosPrivate from "../../../axios/axiosprivate";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";

const ManageServices = () => {
  const axios = useAxiosPrivate();
  const [data, dataLoaing, refetch] = useGetService();

  const DeleteFun = (id) => {
    axios
      .delete(`/services/${id}`)
      .then(() => refetch())
      .then(() => toast.success("the Service Delete Successfully"))
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage Services"}
        subHeading={"Manage All Services"}
      />
      {dataLoaing ? (
        <div className="text-center py-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-5 py-5">
          {data?.map((item) => (
            <ServiceCard
              DeleteFun={DeleteFun}
              isTrue={true}
              key={item?._id}
              data={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageServices;
