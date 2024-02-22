import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Btn from "../../Components/Btn";

const ShopCard = ({ item }) => {
  const { _id, title, img, price, short_description } = item || {};

  return (
    <div className="font-andika">
      
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img
            src={img}
            alt="card-image" className="object-cover w-full h-full hover:scale-[1.08] duration-1000" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block  text-xl antialiased font-semibold leading-relaxed text-brand-color">
              {title}
            </p>
            <p className="block  text-base antialiased font-bold text-blue-950 leading-relaxed ">
              {price} tk
            </p>
          </div>
          <p className="block  text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
           {short_description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/shop/${_id}`}> <Btn
            className="w-full"
            >
            Details
          </Btn></Link>
        </div>
      </div>
        {/* <div className="p-4 card h-[400px] rounded bg-[#e9f1ea]">
          <figure>
            <img
              className="md:h-60  rounded hover:scale-[1.08] duration-1000"
              src={img}
              alt="shop item"
            />
          </figure>
          <div className="pt-4">
            <h2 className="text-brand-color md:text-2xl font-bold pb-2 text-center">
              {title}
            </h2>
            <h2 className=" md:text-xl font-bold text-center text-[#f29620] ">
              ${price}
            </h2>
          </div>
        </div> */}
      
      

    </div>
  );
};

ShopCard.propTypes = {
  item: PropTypes.object,
};

export default ShopCard;
