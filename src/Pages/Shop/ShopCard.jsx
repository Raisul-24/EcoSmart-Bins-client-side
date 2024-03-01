import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Btn from "../../Components/Btn";

const ShopCard = ({ item }) => {
  const { _id, title, img, price, short_description } = item || {};

  return (
    <div className="font-andika">
      
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
      
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
        <div className="absolute inset-0 w-full h-full to-bg-black-5 bg-gradient-to-t from-black/60 via-black/10">
        <p className=" bottom-5 rounded-l-full absolute right-5 text-2xl antialiased font-bold text-white leading-relaxed ">
              {price} tk
            </p>
        </div>
          <img
            src={img}
            alt="card-image" className="object-cover w-full h-full hover:scale-[1.08] duration-1000" />
            
        </div>
        <div className="p-6">
          <div className="  mb-2">
            <p className="block  text-lg antialiased font-semibold leading-relaxed text-brand-color">
              {title}
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
    </div>
  );
};

ShopCard.propTypes = {
  item: PropTypes.object,
};

export default ShopCard;
