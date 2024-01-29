import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
