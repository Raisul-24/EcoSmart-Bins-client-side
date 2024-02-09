import React from 'react';
import { useForm } from 'react-hook-form';

const CustomerInfo = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();


   const onSubmit = async (data) => {
      // Log the form data
      console.log(data);

      // Reset the form after submission
      // reset();
   };

   // Function to check if all fields are filled
   const isFormFilled = () => {
      const { name, mobile, email, city, address, comment } = errors;
      return !(name || mobile || email || city || address || comment);
   };

   return (
      <div>
         <div className="p-3 px-6 rounded-xl bg-lime-50 my-5">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-lime-950 text-green-950">
               <button className="btn-circle bg-green-100 ">
                  <h2 className="text-xl font-bold text-center p-2">1</h2>
               </button>
               <h2 className="text-xl font-bold">Customer Information</h2>
            </div>
            <div className="my-5">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="relative h-10 w-full min-w-[200px]">
                     <input type='text' {...register("name", { required: true })}
                        class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder='' />
                     <label
                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name*
                     </label>
                  </div>
                  <div className="my-5">
                     <div class="relative h-10 w-full min-w-[200px]">
                        <input type='text' {...register("mobile", { required: true })}
                           class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Mobile*
                        </label>
                     </div>
                  </div>
                  <div className="my-5">
                     <div class="relative h-10 w-full min-w-[200px]">
                        <input type='email' {...register("email", { required: true })}
                           class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Email*
                        </label>
                     </div>
                  </div>
                  <div className="my-5">
                     <div class="relative h-10 w-full min-w-[200px]">
                        <input type='text' {...register("city", { required: true })}
                           class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           City*
                        </label>
                     </div>
                  </div>
                  <div className="my-5">
                     <div class="relative h-10 w-full min-w-[200px]">
                        <input type='text' {...register("address", { required: true })}
                           class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Address*
                        </label>
                     </div>
                  </div>
                  <div className="my-5">
                     <div class="relative w-full min-w-[200px]">
                        <textarea type='text' {...register("comment", { required: true })}
                           class="peer h-full  min-h-[100px] w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Comment*
                        </label>
                     </div>
                  </div>
                  
               </form>
            </div>
         </div>
      </div>
   );
};

export default CustomerInfo;