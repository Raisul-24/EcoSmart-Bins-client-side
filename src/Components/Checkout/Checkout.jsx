import React from 'react';
import CustomerInfo from './CustomerInfo';
import Payment from './Payment';
import Delivery from './Delivery';
import { Link } from 'react-router-dom';

const Checkout = () => {
   return (
      <div className='container mx-auto'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1 */}
            <CustomerInfo></CustomerInfo>

            <Payment></Payment>
            {/* 3 */}
            <Delivery></Delivery>
            <div className=""></div>

         </div>
         <div className="py-3 border-t-2 border-lime-950 text-green-950 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
               {/*  */}
               <div class="inline-flex items-center">
                  <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="link">
                     <input type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-green-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-green-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="link" />
                     <span
                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                           stroke="currentColor" stroke-width="1">
                           <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                        </svg>
                     </span>
                  </label>
                  <label class="mt-px font-light text-green-700 cursor-pointer select-none" htmlFor="link">
                     <p class="flex font-sans text-base antialiased font-medium leading-relaxed text-green-900">
                        I agree with the&nbsp;
                        <a href="#"
                           class="block font-sans text-base antialiased font-medium leading-relaxed text-red-500 transition-colors hover:underline">
                           terms and conditions
                        </a>,&nbsp;
                        <a href="#"
                           class="block font-sans text-base antialiased font-medium leading-relaxed text-red-500 transition-colors hover:underline">
                           Privacy Policy
                        </a>
                        &nbsp;and&nbsp;
                        <a href="#"
                           class="block font-sans text-base antialiased font-medium leading-relaxed text-red-500 transition-colors hover:underline">
                           Refund and Return Policy
                        </a>
                        .
                     </p>
                  </label>
               </div>
               {/*  */}
               <button>
              {" "}
              <Link
                to={"/"}
                className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color transition duration-300"
              >
               Checkout
              </Link>
            </button>
            </div>
         </div>

      </div>
   );
};

export default Checkout;