import { useForm } from "react-hook-form";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import useAxiosPrivate from "./../../../axios/axiosprivate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddServices = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const Servicedata = {
      img: data.img,
      title: data.title,
      drescaption: data.drescaption,
    };
    axios
      .post("/services", Servicedata)
      .then(() => reset())
      .then(() => {
        toast.success("New Service Added Successfully");
        navigate("/dashboard/manageServices")
      });
  };
  return (
    <div>
      <SectionTitle heading={"add service"} subHeading={"Add New Service"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl p-5 shadow-2xl rounded-xl mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Add Image(URL)"
          className="input input-bordered w-full"
          {...register("img", { required: true })}
        />
        <input
          type="text"
          placeholder="Add Title"
          className="input input-bordered w-full"
          {...register("title", { required: true })}
        />
        <textarea
          placeholder="Add Drescaption"
          className="input input-bordered w-full min-h-36"
          {...register("drescaption", { required: true })}
        ></textarea>
        <input
          type="submit"
          className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
          value={"add service"}
        />
      </form>
    </div>
  );
};

export default AddServices;
