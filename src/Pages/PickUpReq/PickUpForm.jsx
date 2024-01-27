import { useRef } from "react";
import Swal from "sweetalert2";

const PickUpForm = () => {
    const formRef = useRef(null);

    const handleReqPickup = e =>{
        e.preventDefault();
        
        const currentDate = new Date();
        const currentDateTime = currentDate.toISOString();

        const form = e.target;
        const address =form.address.value;
        const name =form.name.value;
        const lastName =form.lastName.value;
        const email =form.email.value;
        const number =parseInt(form.number.value);
       

        const newData ={address,name,lastName,email,number, currentDateTime};
       
        console.log(newData);
        
        
        //send data to the server
        fetch('http://localhost:8085/pickupReq',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
               
                Swal.fire({
                    title: 'Success!',
                    text: 'Request Sent Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


        formRef.current.reset();
    }






  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
        <div className="bg-white max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-6 h-full">
            <div className="bg-[#3A9E1E] p-2 md:p-10 col-span-6 md:col-span-2">
              <h2 className=" mb-10 font-bold text-sm md:text-2xl text-white before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Trusted And Reliable Waste Collection!
              </h2>
              <p className="font-bold text-white py-8 border-b border-blue-700">
                Location Address
                <span className="font-normal text-xs block">
                  Romada, 16/A, YoYo City, USA
                </span>
              </p>
              <p className="font-bold text-white py-8 border-b border-blue-700">
                Phone Number
                <span className="font-normal text-xs  block">
                  +889 (909) 567 87 9
                </span>
              </p>
              <p className="font-bold text-white py-8 border-b border-blue-700">
                Email Address
                <span className="font-normal text-xs  block">
                  example@example.com
                </span>
              </p>
              <p className="font-bold text-white py-8 border-b border-blue-700">
                Web Address
                <span className="font-normal text-xs  block">
                  zigzagexampl.com
                </span>
              </p>
            </div>
            <div className="bg-blue-50 p-2 md:p-14 col-span-6 md:col-span-4">
              <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Request Pickup
              </h2>
              <p className="mb-14 font-semibold  text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Please complete the form below, to request a quote, and we will
                be in touch. Or you can call us +880123456789 and our
                specialists will provide the necessary help!
              </p>
              <form ref={formRef} onSubmit={handleReqPickup} className="font-semibold  text-blue-900 ">
                {/* form name and address row */}
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Your Address"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                {/* form name and address row */}
                <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        required
                        name="name"
                        placeholder="First Name"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        required
                        name="lastName"
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex mb-8">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="number"
                        name="number"
                        required
                        placeholder="Phone"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Confirm Request"
                  className="btn w-full border-none shadow-lg shadow-brand-color lg:btn-lg bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color"
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
