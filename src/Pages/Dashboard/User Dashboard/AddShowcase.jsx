import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import animation from "./Animation - 1706186778335.json"
import { useForm } from "react-hook-form";


const AddShowcase = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
            <SectionTitle
                heading="Upload Your Artwork"
                subHeading="Ready to showcase your creativity?"
            ></SectionTitle>
            <div className="flex gap-5 py-10">
                <div className="w-2/3 lg:text-xl">Welcome to our Waste Art Showcase! We believe that creativity knows no bounds, especially when it comes to turning waste into art. We invite you to contribute to our growing gallery of waste-inspired masterpieces. Follow these simple steps to showcase your talent and inspire others.</div>
                <div className=""><Lottie className="h-40 w-40" animationData={animation} loop={true} /></div>
            </div>
            <div>
                <h3 className="w-fit mx-auto capitalize pt-5 pb-2 text-3xl border-b-4 border-brand-color mb-10 font-semibold text-[#101a30]">
                Share your showcased art
                </h3>
                <form
                    // onSubmit={handleSubmit(onSubmit)}
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
                        className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-400 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-brand-color w-full"
                        value={"add art work"}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddShowcase;