import useAuth from "../../API/useAuth/useAuth";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../axios/axiosPublic";
import useGetAProduct from "../../API/ServiceApi/useGetAProduct";

const ParchesShopProduct = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const [product, loading] = useGetAProduct(id);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }

  const { _id, title, img } = product || {};

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const quantity = form.quantity.value;

    const productValue = {
      _id,
      title,
      quantity,
      email,
      price,
      date,
      img,
    };

    //console.log(productValue);

    if (quantity > 0) {
      axiosPublic
        .post("/my-cart", productValue)
        .then((res) => {
          console.log(res.data);

          if (res.data.insertedId) {
            console.log(res.data);

            return Swal.fire({
              title: "Good job",
              text: "This shop product added on Cart",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "This product is out of stock.",
      });
    }
  };

  return (
    <div className=" p-20">
      <h2 className="text-4xl font-bold text-center text-brand-color">
        Product add to cart Page
      </h2>
      <p className=" text-center  p-10 font-sans"></p>
      <form onSubmit={handleOrder}>
        <div className="form-control grid grid-rows-1 md:grid-cols-2 gap-8 w-max-6xl mx-auto font-sans">
          <div>
            <label className="label ">Food Name</label>
            <label className="input-group input-group-vertical ">
              <input
                defaultValue={product?.title}
                type="text"
                name="name"
                placeholder="Enter food name"
                className="input input-bordered w-full"
              />
            </label>

            <label className="label  font-sans">Price</label>
            <label className="input-group input-group-vertical ">
              <input
                type="text"
                defaultValue={product?.price}
                name="price"
                placeholder="Enter food price"
                className="input input-bordered font-sans w-full"
              />
            </label>
          </div>

          <div>
            <label className="label ">product quantity</label>
            <label className="input-group input-group-vertical ">
              <input
                type="number"
                defaultValue={1}
                name="quantity"
                placeholder="Enter Food quantity"
                className="input input-bordered w-full"
              />
            </label>

            <label className="label ">Buyer Email</label>
            <label className="input-group input-group-vertical ">
              <input
                defaultValue={user?.email}
                type="text"
                name="email"
                placeholder="Enter Buyer Email"
                className="input input-bordered w-full"
                readOnly
              />
            </label>
          </div>
        </div>
        <label className="label ">Order Date</label>
        <label className="input-group input-group-vertical ">
          <input
            type="date"
            name="date"
            placeholder="Enter Order Date"
            className="input input-bordered w-full"
          />
        </label>

        <input
          className="w-full border-0 btn lg:px-10 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color mt-8"
          type="submit"
          value="ADD TO CART"
        />
      </form>
    </div>
  );
};

export default ParchesShopProduct;
