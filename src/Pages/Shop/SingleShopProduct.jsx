import { Link, useParams } from "react-router-dom";
import useGetAProduct from "../../API/ServiceApi/useGetAProduct";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../axios/axiosPublic";
import useAuth from "./../../Hooks/UseAuth";

const SingleShopProduct = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [details, loading] = useGetAProduct(id);
  if (loading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }

  const { _id, title, img, description, price } = details || {};

  const handleOrder = () => {
    const date = new Date();
    const status = "pending";
    const product_id = _id;
    const email = user?.email;

    const productValue = {
      title,
      quantity,
      email,
      product_id,
      price,
      date,
      img,
      status,
    };

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
    <div className="font-montserrat my-20 md:flex p-5 justify-start items-center gap-12 bg-white">
      <div className="overflow-hidden flex-1">
        <img
          className="rounded p-12 bg-[#e9f1ea] h-[450px] w-[550px]"
          src={img}
          alt=""
        />
      </div>
      <div className="flex-1 flex justify-between gap-4 items-start flex-col">
        <div>
          <h5 className="text-5xl text-green-600 font-bold pb-5">{title}</h5>
          <p>0 review</p>
        </div>
        <h5 className="font-bold text-4xl text-[#f29620]">${price}</h5>
        <div className="flex gap-3">
          <button
            onClick={() =>
              quantity >= 2 ? setQuantity(quantity - 1) : setQuantity(1)
            }
            className="btn p-1 w-12 text-center rounded-lg hover:border-brand-color hover:text-brand-color focus:outline-0 border border-blue-950 text-3xl"
          >
            -
          </button>
          <p className="p-1 w-16 text-center rounded-lg cursor-pointer focus:outline-0 border border-blue-950 text-3xl">
            {quantity}
          </p>
          <button
            onClick={() =>
              quantity >= 50 ? setQuantity(50) : setQuantity(quantity + 1)
            }
            className="btn p-1 w-12 text-center rounded-lg hover:border-brand-color hover:text-brand-color focus:outline-0 border border-blue-950 text-3xl"
          >
            +
          </button>
        </div>
        <p className="text-black text-lg">{description}</p>
        <div className="flex gap-4 flex-wrap">
          <Link to={`/checkout/${_id}`} className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:from-green-300 hover:to-brand-color hover:bg-gradient-to-r ">
            Buy Product
          </Link>
          <button
            onClick={handleOrder}
            className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:from-green-300 hover:to-brand-color hover:bg-gradient-to-r "
          >
            <FaCartPlus />
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleShopProduct;
