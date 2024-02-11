import { useForm } from "react-hook-form";


const Voucher = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();


   const onSubmit = async (data) => {
      // Log the form data
      console.log(data);

      // Reset the form after submission
      // reset();
   };
   return (
      <div>
         <div className="p-3 py-5 rounded-xl bg-lime-50 my-5">


            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col lg:flex-row justify-between items-center gap-5 text-green-950">
                  <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
                     <div class="relative h-10 w-full md:w-60">
                        <input type='text' {...register("voucher")}
                           class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Gift Voucher
                        </label>
                     </div>
                     <button className="btn btn-sm btn-outline h-10 w-full md:w-32 text-sm text-center rounded-[7px] border border-green-900 ">Apply Voucher</button>  
                  </div>
                  {/*  */}
                  <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
                     <div class="relative h-10 w-full md:w-60">
                        <input type='text' {...register("voucher")}
                           class="peer h-full w-full rounded-[7px] border border-green-900 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-green-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-900 placeholder-shown:border-t-green-900 focus:border-2 focus:border-green-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                           placeholder='' />
                        <label
                           class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-900 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-900 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-900 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                           Promo/Coupon Code
                        </label>
                     </div>
                     <button className="btn btn-sm btn-outline h-10 w-full md:w-32 text-sm text-center rounded-[7px] border border-green-900 ">Apply Coupon</button>  
                  </div>
               
               </div>
            </form>
         </div>

      </div >
   );
};

export default Voucher;