import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../Redux/cartSlice";
import CartRow from "./CartRow";

const Cart = () => {
  const dispatch = useDispatch();

  const { carts, isLoading, isError, error } = useSelector(
    (state) => state.carts
  );

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && carts?.length === 0) {
    content = <div className="col-span-12">No carts found!</div>;
  }

  if (!isError && !isLoading && carts?.length > 0) {
    content = (
      <div>
        <div className="border-b-2">
          {/*<h2 className="text-4xl mb-5 text-center">My carts</h2>*/}
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-center bg-brand-color">
              <tr>
                <th>Number</th>
                <th>Image</th>
                <th>Products Name</th>
                <th>Price</th>
                <th>State</th>
                <th>Cancel Action</th>
                <th>Pay Action</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {carts.map((item, index) => (
                <CartRow key={item.id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl mb-6 text-center text-brand-color font-bold">
        My Carts ({carts?.length})
      </h2>
      {content}
    </div>
  );
};

export default Cart;
