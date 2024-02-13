
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";
import UseAxiosPrivate from "../../axios/axiosprivate";
import { useForm } from "react-hook-form";

const PickUpForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axios = UseAxiosPrivate();
  const { user } = useAuth();
  const handleReqPickup = (data) => {

    const currentDate = new Date();
    const currentDateTime = currentDate.toISOString();


    const newData = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      address: data.address,
      status: "requested",
      currentDateTime,
      enquiryType: data.enquiryType,
      workerEmail: null,
    };

    // console.log(newData);

    //send data to the server
    axios.post("/pickupReq", newData)
    .then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Request Sent Successfully and you get 5 reward points collect from Dashboard > reward points page",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else if (data.data.message) {
        Swal.fire({
          title: "warning!",
          text: data.data.message,
          icon: "warning",
          confirmButtonText: "Cool",
        });
      }
    });

    reset();
  };

  return (
    <div>
      <div className="relative font-montserrat flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 mx-5 lg:py-20 lg:mx-20 py-12">
        <div className="bg-white  mx-auto w-full">
          <div className="grid grid-cols-6 h-full ">
            <div className="bg-[#3A9E1E] p-2 md:p-10 col-span-6 md:col-span-2">
              <h2 className=" mb-10 font-bold text-xl md:text-2xl text-white">
                Trusted And Reliable Waste Collection!
              </h2>
              <div className="">
                <p className="font-bold text-white py-8 lg:border-b border-gray-300">
                  Location Address
                  <span className="font-normal text-xs block">
                    Romada, 16/A, YoYo City, USA
                  </span>
                </p>
                <p className="font-bold text-white py-8 border-b border-gray-300">
                  Phone Number
                  <span className="font-normal text-xs  block">
                    +889 (909) 567 87 9
                  </span>
                </p>
              </div>
              <p className="font-bold text-white py-8 border-b border-gray-300">
                Email Address
                <span className="font-normal text-xs  block">
                  example@example.com
                </span>
              </p>
              <p className="font-bold text-white py-8 border-b border-gray-300">
                Web Address
                <span className="font-normal text-xs  block">
                  zigzagexampl.com
                </span>
              </p>
            </div>
            <div className=" p-2 md:p-14 col-span-6 md:col-span-4">
              <h2 className="mb-14 font-bold text-4xl  before:block before:absolute before:bg-brand-color before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Request Pickup
              </h2>
              <p className="mb-14 font-semibold   before:block before:absolute before:bg-brand-color before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Please complete the form below, to request a quote, and we will
                be in touch. Or you can call us +880123456789 and our
                specialists will provide the necessary help!
              </p>
              <form

                onSubmit={handleSubmit(handleReqPickup)}
                className="font-semibold   "
              >
                {/* form name and address row */}

                {/* services */}
                <div className="lg:flex gap-10">
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Enquiry Type</span>
                    </label>
                    <select
                      className="select select-bordered w-full text-gray-500"
                      {...register("enquiryType", { required: true })}
                    >
                      
                      <option value="residential">Residential Service</option>
                      <option value="dumpster">Dumpster Service</option>
                      <option value="commercial">Commercial Service</option>

                    </select>
                    {errors.enquiryType && (
                      <span className="text-red-600">Enquiry type is required</span>
                    )}
                  </div>

                  {/*  */}
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Industry</span>
                    </label>
                    <select
                      className="select select-bordered w-full text-gray-500"
                      {...register("industry", { required: true })}
                    >
                      
                      <option value="manufacturing">Manufacturing Facilities</option>
                      <option value="educational">Educational Facilities</option>
                      <option value="commercial">Medical And Pharmaceutical</option>

                    </select>
                    {errors.industry && (
                      <span className="text-red-600">Industry type is required</span>
                    )}
                  </div>
                </div>

                {/* container */}
                <div className="lg:flex gap-10 lg:my-10">
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Container Size</span>
                    </label>
                    <select
                      className="select select-bordered w-full text-gray-500"
                      {...register("container", { required: true })}
                    >
                      
                      <option value="32">32 Gallon Trash</option>
                      <option value="64">64 Gallon Trash</option>
                      <option value="76">76 Gallon Trash</option>

                    </select>
                    {errors.container && (
                      <span className="text-red-600">Container Size is required</span>
                    )}
                  </div>

                  {/*  */}
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Quantity Of Containers</span>
                    </label>
                    <select
                      className="select select-bordered w-full text-gray-500"
                      {...register("quantity", { required: true })}
                    >
                      
                      <option value="2">2 Containers</option>
                      <option value="3">3 Containers</option>
                      <option value="5">5 Containers</option>

                    </select>
                    {errors.quantity && (
                      <span className="text-red-600">Quantity Of Containers is required</span>
                    )}
                  </div>
                </div>

                {/* radio */}
                <div className="relative flex w-full my-4 lg:my-10 flex-col  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <nav className="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                    <div role="button"
                      className="lg:flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-brand-color focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-brand-color active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-brand-color">
                      <label htmlFor="horizontal-list-react" className="flex items-center w-full px-3 py-2 cursor-pointer">
                        <div className="grid mr-3 place-items-center">
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center p-0 rounded-full cursor-pointer"
                              htmlFor="horizontal-list-react">
                              <input name="horizontal-list" id="horizontal-list-react" type="radio"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-brand-color transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-brand-color checked:before:bg-brand-color hover:before:opacity-0" />
                              <span
                                className="absolute text-brand-color transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                              </span>
                            </label>
                          </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                          Once Per Week
                        </p>
                      </label>
                    </div>
                    <div role="button"
                      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-brand-color focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-brand-color active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-brand-color">
                      <label htmlFor="horizontal-list-vue" className="flex items-center w-full px-3 py-2 cursor-pointer">
                        <div className="grid mr-3 place-items-center">
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="horizontal-list-vue">
                              <input name="horizontal-list" id="horizontal-list-vue" type="radio"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-brand-color transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-brand-color checked:before:bg-brand-color hover:before:opacity-0" />
                              <span
                                className="absolute text-brand-color transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                              </span>
                            </label>
                          </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                          Twice Per week
                        </p>
                      </label>
                    </div>
                    <div role="button"
                      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-brand-color focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-brand-color active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-brand-color">
                      <label htmlFor="horizontal-list-svelte" className="flex items-center w-full px-3 py-2 cursor-pointer">
                        <div className="grid mr-3 place-items-center">
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center p-0 rounded-full cursor-pointer"
                              htmlFor="horizontal-list-svelte">
                              <input name="horizontal-list" id="horizontal-list-svelte" type="radio"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-brand-color transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-brand-color checked:before:bg-brand-color hover:before:opacity-0" />
                              <span
                                className="absolute text-brand-color transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                              </span>
                            </label>
                          </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                          Thrice Per Week
                        </p>
                      </label>
                    </div>
                  </nav>
                </div>

                {/* personal */}
                
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      value={user?.displayName}
                      className="input input-bordered w-full text-gray-500"
                      {...register("name", { required: true })}
                    />
                  </div>

                <div className="lg:flex gap-10 lg:my-10">
                <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      className="input input-bordered w-full text-gray-500"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="form-control l:w-1/2">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="input input-bordered w-full text-gray-500"
                      {...register("phone", { required: true })}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>

                  <textarea
                    placeholder="Address"
                    className="input input-bordered w-full min-h-36 text-gray-500"
                    {...register("address", { required: true })}
                  ></textarea>
                  {errors.address && (
                    <span className="text-red-600">Address is required</span>
                  )}

                </div>
                <input
                  type="submit"
                  value="Confirm Request"
                  className="btn my-10 w-full border-none shadow-lg shadow-brand-color lg:btn-lg bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickUpForm;
