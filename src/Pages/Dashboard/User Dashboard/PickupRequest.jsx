import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/UseAuth";
import { useGetApiQuery } from "../../../Redux/userApi/getApi";

const PickupRequest = () => {
  const { user } = useAuth();

  const { data, } = useGetApiQuery(
    `/pickupReq/${user?.email}`);
 

  return (
    <div className="font-andika">
      <SectionTitle heading={"My Pickup Request"} />
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center bg-brand-color text-white">
              <th>#</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Container Size</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item?._id} className="text-center">
                <td>{index + 1}</td>
                <td>{item?.enquiryType}</td>
                <td>{item?.date}</td>
                <td>{item?.container}</td>
                <td className="font-bold">{item?.price}</td>
                <td
              className={`badge ${
                item?.status === "complete" && "bg-green-900"
              } ${item?.status === "requested" && "bg-brand-color"} ${
                item?.status === "ongoing" && "bg-yellow-700"
              } border-none text-white capitalize mt-2`}
            >
              {item?.status}
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PickupRequest;
