import React from 'react';

const Delivery = () => {
   return (
      <div>
         <div className="p-3 px-6 rounded-xl bg-lime-50 my-5">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-lime-950 text-green-950">
               <button className="btn-circle bg-green-100 ">
                  <h2 className="text-xl font-bold text-center p-2">3</h2>
               </button>
               <h2 className="text-xl font-bold">Delivery Method</h2>
            </div>
            <div className="my-5">
               <h2 className="font-semibold">Select a delivery method</h2>
               <div className="">
                  <div class="relative flex flex-col ">
                     <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                        <div role="button"
                           class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                           <label htmlFor="vertical-list-react" class="flex items-center w-full px-3 py-2 cursor-pointer">
                              <div class="grid mr-3 place-items-center">
                                 <div class="inline-flex items-center">
                                    <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                                       <input name="vertical-list" id="vertical-list-react" type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                                       <span
                                          class="absolute text-green-800 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                             <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                          </svg>
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                 Home Delivery - 100/=
                              </p>
                           </label>
                        </div>
                        <div role="button"
                           class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                           <label htmlFor="vertical-list-vue" class="flex items-center w-full px-3 py-2 cursor-pointer">
                              <div class="grid mr-3 place-items-center">
                                 <div class="inline-flex items-center">
                                    <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-vue">
                                       <input name="vertical-list" id="vertical-list-vue" type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                                       <span
                                          class="absolute text-green-800 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                             <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                          </svg>
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                 Pickup Point Delivery - 70/=
                              </p>
                           </label>
                        </div>
                        <div role="button"
                           class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                           <label htmlFor="vertical-list-svelte" class="flex items-center w-full px-3 py-2 cursor-pointer">
                              <div class="grid mr-3 place-items-center">
                                 <div class="inline-flex items-center">
                                    <label class="relative flex items-center p-0 rounded-full cursor-pointer"
                                       htmlFor="vertical-list-svelte">
                                       <input name="vertical-list" id="vertical-list-svelte" type="radio"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                                       <span
                                          class="absolute text-green-800 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                             <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                          </svg>
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                 Store Pickup - 0/=
                              </p>
                           </label>
                        </div>
                     </nav>
                  </div>
               </div>


            </div>
         </div>
      </div>
   );
};

export default Delivery;