
import useCart from '../../Hooks/useCart';
import { AiFillDelete } from "react-icons/ai";
import useAxiosPublic from '../../axios/axiosPublic';

const MyCart = () => {
   const [cart] = useCart()
   const axiosPublic = useAxiosPublic();
   // console.log(cart)
   const handleDelete = (itemId) =>{
      console.log(itemId);
   }
   return (
      <div>
         <div className="p-3 lg:px-6 rounded-xl bg-lime-50 my-5">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-lime-950 text-green-950">
               <h2 className="text-base lg:text-xl font-bold">Shopping Cart</h2>
            </div>
            <div className="my-5">
               <div className="relative flex flex-col w-full h-full overflow-scroll text-green-950 bg-transparent shadow-md rounded-xl bg-clip-border">
                  <table className="w-full text-left table-auto min-w-max">
                     <thead className=" bg-lime-100">
                        <tr>
                           <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p className="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 Image
                              </p>
                           </th>
                           <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p className="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 Name
                              </p>
                           </th>
                           <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p className="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 quantity
                              </p>
                           </th>
                           <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p className="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 Price
                              </p>
                           </th>
                           <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              
                           </th>

                        </tr>
                     </thead>
                     <tbody>
                        {
                           cart.map(item => <tr key={item._id}>
                              <td className="p-4 border-b border-blue-gray-50">
                                 <img src={item.img}
                                    alt="" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                              </td>
                              <td className="p-4 border-b border-blue-gray-50">
                                 <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {item.title}
                                 </p>
                              </td>
                              <td className="p-4 border-b border-blue-gray-50">
                                 <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {item.quantity}
                                 </p>
                              </td>
                              <td className="p-4 border-b border-blue-gray-50">
                                 <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {item.price}
                                 </p>
                              </td>
                              <td className="p-4 border-b border-blue-gray-50">
                              <button onClick={() => handleDelete(item._id)}>
                              <AiFillDelete  className='text-xl text-red-700'/>
                              </button>
                              </td>
                           </tr>)
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyCart;