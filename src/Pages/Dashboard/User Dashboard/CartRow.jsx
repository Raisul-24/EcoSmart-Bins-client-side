const CartRow = ({ item, index }) => {
  const { _id, title, price, image } = item || {};
  console.log(_id, title, price, image);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-decagon  w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>${price}</td>

      <td>
        <p className="badge badge-neutral border-brand-color">Pending</p>
      </td>

      <td>
        <button
          //  onClick={() => handleDeleteItem(item)}
          className="btn rounded-lg btn-sm bg-red-600 hover:bg-red-700 text-white"
        >
          Cancel
        </button>
      </td>

      <td>
        <button
          //  onClick={() => handleDeleteItem(item)}
          className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
        >
          Pay
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
