
import Btn from "../../Components/Btn";
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import { Link, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "./job.json"

const CareerDetails = () => {
    const { id } = useParams();
    const { data: career, isLoading: isPending } = useGetApiQuery(`/career/${id}`);


    if (isPending)
        return (
            <div className="text-center py-20">
                <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
            </div>
        );
    return (
        <div>
            <div className="hero h-96 relative" style={{
                backgroundImage: `url(https://i.ibb.co/XSsY7bj/ar-in-frontline-leadership-hr.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>

                <div className="hero-content text-center text-neutral-content relative z-10  ">

                    <div className="text-center text-white">
                        <h1 className="mb-5 text-5xl font-bold">{career.position}</h1>
                        <p className="mb-5">Start Your Green Career Here</p>
                    </div>
                </div>
            </div>
            <div className="lg:m-20 m-5">
                <div>
                    <h2 className="md:text-3xl text-2xl font-bold"> Description</h2>
                    <p className="pt-5 pb-10 lg:pb-16">{career.job_description}</p>
                </div>
                <div className="lg:flex flex-row-reverse lg:justify-between">
                    <div className="lg:w-1/3 ">
                        <Lottie className="w-96 md:mx-auto" animationData={animation} loop={true} />
                    </div>
                    <div className="lg:w-2/3">
                        <div >
                            <h2 className="md:text-3xl text-2xl font-bold">Requirements</h2>
                            <p className="py-5">{career.requirements.map((item) =>
                                (<li key={id}>{item}</li>))}</p>
                        </div>
                        <div>
                            <h2 className="md:text-3xl text-2xl  font-bold">Benefits</h2>
                            <p className="py-5">{career.benefits.map((item) =>
                                (<li key={id}>{item}</li>))}</p>
                        </div>
                    </div>

                </div>

                <div className="lg:my-10 my-5">
                    <p className="font-semibold">Salary: Negotiable</p>
                    <p className="font-semibold text-red-500 py-3">Deadline: {career.apply_deadline}</p>
                </div>
                <div className="flex justify-center">
                    <Link to={`/career/${career._id}/apply`}>
                        <Btn>Apply Now</Btn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CareerDetails;