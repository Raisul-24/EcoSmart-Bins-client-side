import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../Redux/cartSlice";
import CartRow from "./CartRow";
import useAuth from "../../../Hooks/UseAuth";

const Cart = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { carts, isLoading, isError, error, refetch } = useSelector(
    (state) => state.carts,
    {
      enabled: true
    }
  );

  const myCart = carts?.filter(cart => cart?.email === user?.email)

  useEffect(() => {
    dispatch(fetchCart(user?.email));
  }, [dispatch, user?.email]);

  let content;
  if (isLoading) {
    return;
  }
  console.log(myCart);

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && myCart?.length === 0) {
    content = <div className="col-span-12">No carts found!</div>;
  }

  if (!isError && !isLoading && myCart?.length > 0) {
    content = (
      <div className="font-andika">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="text-center text-white bg-brand-color">
              <tr>
                <th>Number</th>
                <th>Image</th>
                <th>Products Name</th>
                <th>Price</th>
                {/* <th>Status</th> */}
                <th>Cancel Action</th>
                <th>Pay Action</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {myCart?.map((item, index) => (
                <CartRow key={item._id} item={item} index={index} />
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
        My Carts ({myCart?.length})
      </h2>
      {content}
    </div>
  );
};

export default Cart;
