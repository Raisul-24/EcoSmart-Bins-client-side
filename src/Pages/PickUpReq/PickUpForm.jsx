
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";
import UseAxiosPrivate from "../../axios/axiosprivate";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { notifyFun } from "../../fun/notifyFun";
import toast from "react-hot-toast";

const PickUpForm = () => {
  const [selectedContainer, setSelectedContainer] = useState("");
  const [dependentInputValue, setDependentInputValue] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axios = UseAxiosPrivate();
  const { user } = useAuth();

  const containerInfo = [

    {
      container: "Select",
    },
    {
      container: "32 Gallon Trash",
      containerValue: 32,
      containerPrice: 100
    },
    {
      container: "64 Gallon Trash",
      containerValue: 64,
      containerPrice: 200
    },
    {
      container: "76 Gallon Trash",
      containerValue: 76,
      containerPrice: 300
    }
  ]


  const handleReqPickup = (data) => {

    const newData = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      address: data.address,
      date: data.date,
      status: "requested",
      enquiryType: data.enquiryType,
      workerEmail: null,
      industry: data.industry,
      container: data.container,
      price: parseFloat(data.price)

    };

    console.log(newData);

    //send data to the server
    axios.post("/pickupReq", newData)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          notifyFun(user?.email, "You Request For New PickUp.");
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
      }).catch(()=>toast.error("Fail to Request"))

    reset();
  };
  const handleContainerChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedContainer(selectedValue);

    // Find the selected container's price
    const selectedContainerInfo = containerInfo.find(container => container.containerValue === parseInt(selectedValue));

    // Set the dependent input value based on the selected container's price
    if (selectedContainerInfo) {
      setDependentInputValue(selectedContainerInfo.containerPrice.toString());
    } else {
      setDependentInputValue("");
    }
  };

  return (
    <div>
      <div className="relative font-andika flex flex-col justify-center overflow-hidden bg-gray-50 mx-5 lg:py-20 lg:mx-20 py-12">
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
              
              <p className="mb-14 font-semibold">
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

                <div className="lg:flex gap-10 my-10">
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Container Size</span>
                    </label>
                    <select
                      className="select select-bordered w-full text-gray-500"
                      {...register("container", { required: true })}
                      value={selectedContainer}
                      onChange={handleContainerChange}
                    >
                      {containerInfo.map((container) => (
                        <option key={container.containerValue} value={container.containerValue}>
                          {container.container}
                        </option>
                      ))}
                    </select>
                    {errors.container && (
                      <span className="text-red-600">Address is required</span>
                    )}


                  </div>
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">price</span>
                    </label>
                    <input
                      type="text"
                      value={dependentInputValue}
                      className="input input-bordered w-full text-gray-500"
                      onChange={(e) => setDependentInputValue(e.target.value)}
                      disabled={selectedContainer === ""}
                      {...register("price", { required: true })}
                    />

                  </div>

                </div>

                {/* personal */}

                <div className="lg:flex gap-10">
                  <div className="form-control lg:w-1/2">
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

                  <div className="form-control lg:w-1/2">
                  <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered w-full text-gray-500"
                      {...register("date", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600">date is required</span>
                    )}
                  </div>
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
                  <div className="form-control lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Phone</span>
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
