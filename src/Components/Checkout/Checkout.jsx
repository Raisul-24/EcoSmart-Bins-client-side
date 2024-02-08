import React from 'react';
import CustomerInfo from './CustomerInfo';
import Payment from './Payment';
import Delivery from './Delivery';

const Checkout = () => {
   return (
      <div className='container mx-auto'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1 */}
            <CustomerInfo></CustomerInfo>



            {/* 2 */}
            <Payment></Payment>
            {/* 3 */}
            <Delivery></Delivery>
         </div>


      </div>
   );
};

export default Checkout;