
const PaymentFailed = () => {
   return (
      <div className="flex justify-center mb-20">
      <div className="p-7 py-10 max-w-xl ">
         <div className="flex justify-center">
            <img className="w-32 h-32 rounded-full bg-green-100" 
            src="https://i.ibb.co/hXtnjWh/wrong-icon.webp" alt="" />
         </div>
         <h2 className="text-center text-xl text-red-500 font-bold my-5">Failure to Pay</h2>  
         <p className="text-center">Please choose another method of payment or try again.</p>
      </div>
   </div>
   );
};

export default PaymentFailed;