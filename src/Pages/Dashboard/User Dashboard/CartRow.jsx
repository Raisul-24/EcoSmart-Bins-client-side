import { FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../axios/axiosPublic";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../../Redux/cartSlice";

const CartRow = ({ item, index }) => {
  const dispatch = useDispatch();
  const { _id, title, price, img, status } = item || {};
  //  console.log(_id, title, price, img, status);
  const disabled = true;
  const axios = useAxiosPublic();

  //  const handleCancel = async (_id) => {
  //    console.log(_id);
  //    try {
  //      const response = await axios.delete(`/my-cart/${_id}`, {
  //        status: "delete",
  //      });
  //      console.log("Response from server:", response?.data);
  //      if (response?.data?.deletedCount > 0) {
  //        dispatch(deleteItemFromCart(_id));
  //        console.log("Parcel status updated successfully", response.data);
  //      } else {
  //        console.log("Parcel not found or status not updated", response.data);
  //      }
  //    } catch (error) {
  //      console.error("Error updating status:", error);
  //    }
  //  };

  const handleCancel = async (_id) => {
    console.log(_id);
    try {
      const response = await axios.delete(`/my-cart/${_id}`, {
        status: "delete",
      });
      console.log("Response from server:", response?.data);
      if (response?.data?.deletedCount > 0) {
        console.log("Parcel status updated successfully", response.data);
        // Dispatch the action after successful deletion
        dispatch(deleteItemFromCart(_id));
      } else {
        console.log("Parcel not found or status not updated", response.data);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <tr className="font-andika">
      <td>{index + 1}</td>
      <td>
        <div className="">
          <div className="avatar">
            <div className="mask rounded-full w-16 h-16">
              <img className="" src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>${price}</td>


      <td className="p-3">
        {status === "pending" ? (
          <button
            className="btn rounded-lg btn-sm bg-red-600 hover:bg-red-700 text-white"
            onClick={() => handleCancel(_id)}
          >
            <FaTrash />
          </button>
        ) : (
          <button disabled={disabled} className="btn btn-ghost btn-sm bg-black">
            <FaTrash />
          </button>
        )}
      </td>

      <td className="p-3">
        {status === "pending" || status === "cancel" ? (
          <button disabled={disabled} className="btn rounded-lg btn-sm">
            Pay
          </button>
        ) : (
          <button
            onClick={() => handleCancel(_id)}
            className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
          >
            Pay
          </button>
        )}
      </td>
    </tr>
  );
};

export default CartRow;