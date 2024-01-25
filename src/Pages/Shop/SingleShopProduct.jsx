import { useParams } from "react-router-dom";
import useGetAProduct from "../../API/ServiceApi/useGetAProduct";

const SingleShopProduct = () => {
  const { id } = useParams();

  const [details, loading] = useGetAProduct(id);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }

  const { title, img, description, price } = details || {};

  return (
    <div className="my-20 md:flex p-5 justify-start items-center gap-12 bg-white">
      <div className="overflow-hidden">
        <img
          className="rounded p-20 bg-[#e9f1ea] h-[450px] w-[550px] object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="flex-1 flex justify-between gap-8 items-start flex-col">
        <div>
          <h5 className="text-4xl text-green-600 font-bold pb-2">{title}</h5>
          <p>
            <small>0 review</small>
          </p>
        </div>
        <h5 className="font-bold text-2xl text-[#f29620]">${price}</h5>
        <p className="text-black">{description}</p>
        <button className="mt-8 border-0 btn lg:px-10 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-300 hover:to-brand-color ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleShopProduct;
