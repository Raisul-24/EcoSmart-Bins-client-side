import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
   const { transaction_id } = useParams();
   return (
      <div className="flex justify-center mb-20">
         <div className="p-7 py-10 max-w-xl ">
            <div className="flex justify-center">
               <img className="w-32 h-32 rounded-full bg-green-100" src="https://i.ibb.co/myr3xw8/success-green-check-mark-icon.webp" alt="" />
            </div>

            <h2 className="text-center text-xl text-green-600 font-bold my-5">Payment Successful!!</h2>
            <div className="flex justify-between gap-x-3 md:gap-x-32 mb-5">
               <h2>Transaction id</h2>
               <h2 className="font-semibold">{transaction_id}</h2>
            </div>
            <p className="text-center">Thank you for your payment. An automated payment receipt will be sent to your registered email.</p>

         </div>
      </div>
   );
};

export default PaymentSuccess;