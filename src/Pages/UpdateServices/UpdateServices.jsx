import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../axios/axiosprivate";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useGetAService from "../../API/ServiceApi/useGetAService";
import { useNavigate, useParams } from "react-router-dom";
const UpdateServices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, dataLoaing, refetch] = useGetAService(id);
  const axios = useAxiosPrivate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const Servicedata = {
      img: data.img,
      title: data.title,
      drescaption: data.drescaption,
    };
    axios
      .patch(`/services/${id}`, Servicedata)
      .then(() => {
        toast.success("Service Update Successfully");
        navigate("/dashboard/manageServices");
      })
      .then(() => refetch());
  };
  return (
    <div>
      <SectionTitle heading={"update service"} subHeading={data?.title} />
      {dataLoaing ? (
        ""
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl p-5 shadow-2xl rounded-xl mx-auto space-y-4"
        >
          <input
            type="text"
            placeholder="Add Image(URL)"
            className="input input-bordered w-full"
            defaultValue={data?.img}
            {...register("img")}
            required
          />
          <input
            type="text"
            placeholder="Add Title"
            className="input input-bordered w-full"
            defaultValue={data?.title}
            {...register("title")}
            required
          />
          <textarea
            placeholder="Add Drescaption"
            className="input input-bordered w-full min-h-36"
            defaultValue={data?.drescaption}
            {...register("drescaption")}
            required
          ></textarea>
          <input
            type="submit"
            className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
            value={"add service"}
          />
        </form>
      )}
    </div>
  );
};

export default UpdateServices;
