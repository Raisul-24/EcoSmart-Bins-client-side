import { Link, useParams } from "react-router-dom";
import useGetAProduct from "../../API/ServiceApi/useGetAProduct";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import useAxiosPublic from "../../axios/axiosPublic";
import useAuth from "./../../Hooks/UseAuth";
import { toast } from "react-hot-toast";
import Btn from "../../Components/Btn";

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

  const { _id, title, img, detailed_description, price } = details || {};

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
          // console.log(res.data);
          if (res.data.insertedId) {
            // console.log(res.data);
            toast.success('Successfully added to My cart!');
          }
        })

    }

  };

  return (
    <div className="font-andika my-20 md:flex p-5 justify-start items-center gap-12 bg-white ">
      <div className="overflow-hidden flex-1">
        <img
          className="rounded p-12 w-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="flex-1 flex justify-between gap-4 items-start flex-col">
        <div>
          <h5 className="md:text-4xl text-2xl text-green-600 font-bold pb-5">{title}</h5>
          <p>0 review</p>
        </div>
        <div className="flex gap-10 w-2/3  pb-2">
          <h5 className="font-bold text-xl md:text-2xl text-[#f29620] w-1/2">
            {price * quantity} Tk
          </h5>
          <div className="flex gap-3 border-2 px-5  "> 
            <button
              onClick={() =>
                quantity >= 2 ? setQuantity(quantity - 1) : setQuantity(1)
              }
              className=" text-xl"
            >
              -
            </button>
            <p className=" text-xl">
              {quantity}
            </p>
            <button
              onClick={() =>
                quantity >= 50 ? setQuantity(50) : setQuantity(quantity + 1)
              }
              className="text-xl"
            >
              +
            </button>
          </div>
        </div>
        <p className="lg:py-8 text-lg text-gray-700 border-t-2">{detailed_description}</p>
        <div className="flex gap-4 flex-wrap">
          <Btn>
          <Link
            to={`/checkout/${_id}/${quantity}`}
            
          >
            Buy Now
          </Link>
          </Btn>
          <Btn
            onClick={handleOrder}
            className="flex"
          >
            <p>Add to Cart</p>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default SingleShopProduct;
