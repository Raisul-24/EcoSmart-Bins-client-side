import CustomerInfo from "./CustomerInfo";
import Payment from "./Payment";
import Delivery from "./Delivery";
import { Link, useParams } from "react-router-dom";
import OrderOverview from "./OrderOverview";
import Voucher from "./Voucher";
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxiosPublic from "../../axios/axiosPublic";

const Checkout = () => {
  const axiosPublic = useAxiosPublic();
  const { id, quantity } = useParams();
  const itemQuantity = parseInt(quantity ? quantity : 1);
  const { data, isLoading } = useGetApiQuery(`/products/${id}`);
  const [paymentData, setPaymentdata] = useState("");
  const [deliveryData, setDeliverydata] = useState(100);
  const product = data?.details;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  if (isLoading)
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  const { _id, img, title, price, description } = product;
  const totalPrice = price * itemQuantity + deliveryData;
  const onSubmit = async (data) => {
    const {
      name: CustomerName,
      mobile: CustomerMobile,
      email: CustomerEmail,
      city: CustomerCity,
      address: CustomerAddress,
      comment: CustomerComment,
    } = data;
    // Log the form data
    const checkoutData = {
      CustomerName,
      CustomerMobile,
      CustomerEmail,
      CustomerCity,
      CustomerAddress,
      CustomerComment,
      img,
      title,
      price,
      quantity: itemQuantity,
      description,
      paymentData,
      totalPrice,
      product_id: _id,
    };

    axiosPublic.post("/order", checkoutData).then((res) => {
      // window.location.replace(data.url)
      window.location.replace(res.data.url);
    });

    // Reset the form after submission
    // reset();
  };
  const OrderOverviewData = { title, price, itemQuantity, totalPrice };

  const isOnlinePaymentSelected = paymentData === "Online Payment";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1 */}
        <CustomerInfo register={register} errors={errors}></CustomerInfo>
        {/* 2 */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 lg:gap-5">
            {/* Payment component */}
            <Payment setPaymentdata={setPaymentdata} />
            {/* Delivery component */}
            <Delivery setDeliverydata={setDeliverydata} />
          </div>
          {/* Additional section below Payment and Delivery */}
          {/* <div className="mb-5">
            <Voucher></Voucher>
          </div> */}
          <div className="mb-5">
            <OrderOverview
              OrderOverviewData={OrderOverviewData}
            ></OrderOverview>
          </div>
        </div>
      </div>
      <div className="py-3 border-t-2 border-lime-950 text-green-950 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/*  */}
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="link"
            >
              <input
                type="checkbox"
                required
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-green-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-green-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="link"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px font-light text-green-700 cursor-pointer select-none"
              htmlFor="link"
            >
              <p className="flex  text-xs lg:text-base font-medium leading-relaxed text-green-900">
                I agree with the&nbsp;
                <a
                  href="#"
                  className="block  text-xs lg:text-base font-medium leading-relaxed text-red-500 transition-colors hover:underline"
                >
                  terms and conditions
                </a>
                ,&nbsp;
                <a
                  href="#"
                  className="block  text-xs lg:text-base font-medium leading-relaxed text-red-500 transition-colors hover:underline"
                >
                  Privacy Policy
                </a>
                &nbsp;and&nbsp;
                <a
                  href="#"
                  className="block  text-xs lg:text-base font-medium leading-relaxed text-red-500 transition-colors hover:underline"
                >
                  Refund and Return Policy
                </a>
                .
              </p>
            </label>
          </div>
          {/*  */}

          {/* Conditional rendering of the checkout button */}
          {isOnlinePaymentSelected ? (
            // Render checkout button for online payment
            <button
              type="submit"
              className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color transition duration-300"
            >
              {" "}
              Checkout
            </button>
          ) : (
            // Render place order button for other payment methods
            <Link to="/placeOrder">
              <button
                type="submit"
                className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color transition duration-300"
              >
                {" "}
                Place Order
              </button>
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default Checkout;
