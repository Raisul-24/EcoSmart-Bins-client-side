const CartRow = ({ item }) => {
  const { _id, title, price } = item || {};
  console.log(_id, title, price);
  return <div>{title}</div>;
};

export default CartRow;
