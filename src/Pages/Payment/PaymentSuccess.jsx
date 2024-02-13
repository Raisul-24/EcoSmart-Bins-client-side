import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
   const { transaction_id } = useParams();
   return (
      <div>
         <h2>Payment Success!! {transaction_id}</h2>
         
      </div>
   );
};

export default PaymentSuccess;