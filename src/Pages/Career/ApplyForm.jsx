import { useParams } from "react-router-dom";
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import { useForm } from "react-hook-form";
import Btn from "../../Components/Btn";
import UseAxiosPrivate from "../../axios/axiosprivate";
import { notifyFun } from "../../fun/notifyFun";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";


const ApplyForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axios = UseAxiosPrivate();
    const { user } = useAuth();
    const { id } = useParams();
    const { data: career, isLoading: isPending } = useGetApiQuery(`/career/${id}`);
    const onSubmit = (data) => {
        const applyData = {
          name: data.name,
          position: career.position,
          email: data.email,
          phone: data.phone,
          resume: data.resume,
          about: data.about 
        };
        
        axios
          .post("/application", applyData)
          .then(() => reset())
          .then(() => {
            notifyFun(user?.email, `You apply for ${career.position}`);
            toast.success("Apply Successfully");
          });
        //   if (applyData.insertedId) {
        //     notifyFun(user?.email, `You apply for ${career.position}`);
        //     toast.success("Apply Successfully");
        // }
          
      };
    if (isPending)
        return (
            <div className="text-center py-20">
                <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
            </div>
        );
    return (
        <div className="m-5 lg:m-20">
            <h2 className="text-center font-bold lg:text-3xl text-xl text-brand-color">Apply for {career.position}</h2>
            <form

                onSubmit={handleSubmit(onSubmit)}
                className="font-semibold border-2 p-10 md:w-2/3 mx-auto mt-10 bg-lime-50  "
            >

                <div className="lg:flex gap-10">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Full Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="input input-bordered w-full text-gray-500"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <span className="text-red-600">Name is required</span>
                        )}
                    </div>

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered w-full text-gray-500"
                            {...register("email", { required: true })}
                        />
                        {errors.name && (
                            <span className="text-red-600">email is required</span>
                        )}
                    </div>
                </div>

                <div className="lg:flex gap-10 lg:my-10">

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Phone*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="input input-bordered w-full text-gray-500"
                            {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                            <span className="text-red-600">Phone Number is required</span>
                        )}
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Resume Link*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Resume Link"
                            className="input input-bordered w-full text-gray-500"
                            {...register("resume", { required: true })}
                        />
                        {errors.phone && (
                            <span className="text-red-600">Resume Link is required</span>
                        )}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">About yourself</span>
                    </label>

                    <textarea
                        placeholder="Tell us about yourself"
                        className="input input-bordered w-full min-h-36 text-gray-500"
                        {...register("about", { required: false })}
                    ></textarea>


                </div>
                <div className=" mt-8">
                    <Btn>
                        <input
                            type="submit"
                            value="Submit"

                        />
                    </Btn>
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;