import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import animation from "./Animation - 1706186778335.json"
import { useForm } from "react-hook-form";
import send from "./send.json"
import img from "../../../assets/images/recycle.jpg"
import { useEffect } from "react";
import Aos from "aos";


const AddShowcase = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          offset: 200,
        });
      }, []);
    const { register } = useForm();
    return (
        <div>
            <SectionTitle
                heading="Upload Your Artwork"
                subHeading="Ready to showcase your creativity?"
            ></SectionTitle>

            {/* content */}

            <div className="lg:flex gap-10 py-10">
                <div className="w-1/2 lg:text-xl py-10">Welcome to our Waste Art Showcase! We believe that creativity knows no bounds, especially when it comes to turning waste into art. We invite you to contribute to our growing gallery of waste-inspired masterpieces. Follow these simple steps to showcase your talent and inspire others. Stay tuned for special challenges and events. It is an opportunity to create new, exciting pieces and add a dynamic twist to our waste art community.</div>
                <div data-aos="zoom-out-left"><img src="https://i.imgur.com/bCiHngO.jpg" alt="" className="w-96"/></div>
            </div>
            <div className="my-20">
                <h3 className="w-fit mx-auto capitalize pt-5 pb-2 text-3xl border-b-4 border-brand-color mb-10 font-semibold text-[#101a30]">
                    Share your showcased art
                </h3>
                <div className="lg:flex gap-10">
                    <div  className="lg:w-1/3">
                        <img src={img} alt=""  />
                    </div>
                    <div className="lg:w-1/2">
                    <p className=" text-xl">Use the submission form below to upload a clear picture of your waste art creation. We want to see the beauty in your work, so make sure the image does justice to your masterpiece.</p>
                    <div data-aos="fade-down-left" className="h-64 hero lg:w-5/6 lg:ml-32 mt-10" style={{ backgroundImage: 'url(https://i.imgur.com/KzjHrU5.jpg)'}}>
                    </div>
                    <div data-aos="fade-up-right" className="border-4 border-brand-color bg-red-100 p-10 w-2/3 text-2xl text-brand-color font-bold -mt-28 bg-opacity-80">Ready to showcase your creativity? Start by uploading your waste art masterpiece below and be a part of our growing waste art community!</div>
                    </div>
                </div>
                <Lottie className="h-52 w-64 mx-auto mt-10" animationData={send} loop={true} />

                {/* form */}
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

            {/* note */}
            <div className="flex mt-20 border-4 border-brand-color p-5 bg-red-100 bg-opacity-80">
                <p className="text-lg font-semibold"><span className="text-red-500 font-bold">Note: </span>Our team will review and approve your submission to ensure it aligns with our showcase guidelines. Once approved, your artwork will be featured in our Waste Art Showcase.</p>
                <div ><Lottie className="h-44 w-44" animationData={animation} loop={true} /></div>
            </div>
            
        </div>
    );
};

export default AddShowcase;