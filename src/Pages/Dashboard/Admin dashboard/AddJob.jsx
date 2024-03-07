import { Controller, useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { WithContext as ReactTags } from 'react-tag-input';
import UseAxiosPrivate from "../../../axios/axiosprivate";
import toast from "react-hot-toast";


const AddJob = () => {
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm();
    const axios = UseAxiosPrivate();
    
    const onSubmit = (data) => {
        const requirements = data.requirements.map(tag => tag.text);
        const benefits = data.benefits.map(tag => tag.text);
        
        const jobData = {
            position: data.position,
            job_description: data.description,
            requirements: requirements,
            benefits: benefits,
            apply_deadline: data.date,
            short_description: data.short
        };
        
        axios
          .post("/career", jobData)
          .then(() => reset())
          .then(() => {
            toast.success("Posted Job Successfully");
          });
        
          
      };
    return (
        <div className="">
            <SectionTitle heading={"add new job post"} />
            <div className="max-w-xl lg:max-w-3xl border rounded-xl mx-auto p-5">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" space-y-4"
                >
                    <div className="form-control">

                        <input
                            type="text"
                            placeholder="Job position"
                            className="input input-bordered w-full text-gray-500"
                            {...register("position", { required: true })}
                        />
                        {errors.position && (
                            <span className="text-red-600">Position is required</span>
                        )}
                    </div>

                    <div className="form-control">
                        <Controller
                            name="requirements"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <ReactTags
                                    {...field}
                                    handleDelete={(i) => field.onChange(field.value.filter((_, index) => index !== i))}
                                    handleAddition={(tag) => field.onChange([...field.value, tag])}
                                    placeholder="Enter requirements"
                                    classNames={{
                                        tag: 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2',
                                        tagInput: 'input input-bordered w-full text-gray-500 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500',
                                        remove: 'text-gray-500 hover:text-red-600',
                                    }}
                                />
                            )}
                        />
                        {errors.requirements && (
                            <span className="text-red-600">Requirements are required</span>
                        )}
                    </div>
                    <div className="form-control">
                        <Controller
                            name="benefits"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <ReactTags
                                    {...field}
                                    handleDelete={(i) => field.onChange(field.value.filter((_, index) => index !== i))}
                                    handleAddition={(tag) => field.onChange([...field.value, tag])}
                                    placeholder="Enter benefits"
                                    classNames={{
                                        tag: 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2',
                                        tagInput: 'input input-bordered w-full text-gray-500 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500',
                                        remove: 'text-gray-500 hover:text-red-600',
                                    }}
                                />
                            )}
                        />
                        {errors.benefits && (
                            <span className="text-red-600">Benefits are required</span>
                        )}
                    </div>

                    <div className="form-control ">
                        
                        <input
                            type="date"
                            placeholder="Deadline"
                            className="input input-bordered w-full text-gray-500"
                            {...register("date", { required: true })}
                        />
                        {errors.date && (
                            <span className="text-red-600">date is required</span>
                        )}
                    </div>


                    <div className="form-control ">

                        <input
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered w-full text-gray-500"
                            {...register("short", { required: true })}
                        />
                        {errors.short && (
                            <span className="text-red-600">Short Description is required</span>
                        )}
                    </div>

                    <div className="form-control">
                        <textarea
                            placeholder="Tell us about yourself"
                            className="input input-bordered w-full min-h-36 text-gray-500"
                            {...register("description", { required: true })}
                        ></textarea>
                        {errors.description && (
                            <span className="text-red-600"> Description is required</span>
                        )}


                    </div>
                    <div className=" mt-8">
                        <input
                            type="submit"
                            className="btn lg:px-10 bg-gradient-to-r from-brand-color to-green-500 lg:text-xl capitalize text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
                            value={"add job post"}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;