import useGetOrders from "../../../API/OrderApi/useGetOrders";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/UseAuth";

const PaymentHistory = () => {
  const [allOrders] = useGetOrders();
  const {user} = useAuth()

  const  myOrder = allOrders?.filter((order) => order?.payableOrder?.cus_email === user?.email);
  
  return (
    <div className="font-andika">
        <SectionTitle heading={"My Payment History"}/>
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center bg-brand-color text-white">
              <th>#</th>
              <th>Transaction Id</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Status</th> 
            </tr>
          </thead>
          <tbody>
            {myOrder?.map((user, index) => (
              <tr key={user?._id}
              className="text-center"
              >
                <td>{index + 1}</td>
                <td>{user?.transaction_ID}</td>
                <td>{user?.payableOrder?.cus_email}</td>
                <td>{user?.payableOrder?.product_name}</td>
                <td className="font-bold">{user?.payableOrder?.total_amount } Tk</td>
                <td
                  className={`badge ${
                    user?.paidStatus ? "bg-green-600 text-white mt-2" : "bg-red-600 text-white mt-2"
                  } `}
                >
                  {user?.paidStatus ? "complete" : "incomplete"}
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
