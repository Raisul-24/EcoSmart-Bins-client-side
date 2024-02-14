

const PlacedOrder = () => {
   return (
      <div className="flex justify-center mb-20">
      <div className="p-7 py-10 max-w-xl ">
         <div className="flex justify-center">
            <img className="w-32 h-32  p-4 bg-green-100" 
            src="https://i.ibb.co/tZF2tQM/order-placed-purchased-icon.png" alt="" />
         </div>

         <h2 className="text-center text-xl text-green-600 font-bold my-5">Order Placed Successful!!</h2>
         <p className="text-center">Thank you for your order. Stay with us and keep your area neat & clean.</p>

      </div>
   </div>
   );
};

export default PlacedOrder;