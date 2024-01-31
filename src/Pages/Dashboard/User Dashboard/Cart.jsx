import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../Redux/cartSlice";
import CartRow from "./CartRow";

const Cart = () => {
  const dispatch = useDispatch();

  const { carts, isLoading, isError, error } = useSelector(
    (state) => state.carts
  );
  console.log(carts);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  let content;

  if (isLoading) content = <p>loading</p>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && carts?.length === 0) {
    content = <div className="col-span-12">No carts found!</div>;
  }

  if (!isError && !isLoading && carts?.length > 0) {
    content = carts.map((item) => <CartRow key={item.id} item={item} />);
  }

  return (
    <div>
      <h2 className="text-4xl mb-6">My Cart</h2>
      {content}
    </div>
  );
};

export default Cart;
