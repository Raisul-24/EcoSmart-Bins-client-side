import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../axios/axiosPublic";
import { notifyFun } from "../../../fun/notifyFun";
import useAuth from "../../../Hooks/UseAuth";

const FeedbackAndRatings = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    const reviewItem = {
      title: data.title,
      feedback: data.feedback,
      rating: parseInt(data.rating),
      date: data.date,
    };

    axiosPublic.post("/reviews", reviewItem).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        notifyFun(user?.email, `your feedback is added`);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="font-andika">
      <SectionTitle heading="Share Your FeedBack"></SectionTitle>
      <div className="max-w-xl lg:max-w-3xl border rounded-xl mx-auto p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="title"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Title is required</span>
              )}
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">FeedBack</span>
              </label>
              <input
                type="text"
                {...register("feedback", { required: true })}
                placeholder="Feedback"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">feedback is required</span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Rating</span>
              </label>
              <input
                type="number"
                {...register("rating", { required: true })}
                placeholder="rating"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">rating is required</span>
              )}
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Date"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">date is required</span>
              )}
            </div>
          </div>
          <div className="form-control  mt-6">
            <input
              className="btn  bg-gradient-to-r from-brand-color to-green-300 hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color text-white "
              type="submit"
              value="Add Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackAndRatings;
