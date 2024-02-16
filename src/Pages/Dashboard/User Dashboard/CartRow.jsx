import useAxiosPublic from "../../../axios/axiosPublic";

const CartRow = ({ item, index }) => {
  const { _id, title, price, img, status } = item || {};
  //  console.log(_id, title, price, img, status);
  const disabled = true;
  const axios = useAxiosPublic();

  const handleCancel = async (_id) => {
    console.log(_id);
    try {
      const response = await axios.patch(`/my-cart/${_id}`, {
        status: "cancel",
      });
      console.log("Response from server:", response?.data);
      if (response?.data?.modifiedCount > 0) {
        console.log("Parcel status updated successfully", response.data);
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
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-decagon  w-16 h-16">
              <img className="" src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>${price}</td>

      <td>
        <p className="badge badge-neutral border-brand-color">{status}</p>
      </td>

      <td className="p-3">
        {status === "pending" ? (
          <button
            className="btn rounded-lg btn-sm bg-red-600 hover:bg-red-700 text-white"
            onClick={() => handleCancel(_id)}
          >
            Cancel
          </button>
        ) : (
          <button disabled={disabled} className="btn btn-ghost btn-sm bg-black">
            Cancel
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
