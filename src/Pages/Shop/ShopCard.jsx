import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  const { _id, title, img, price } = item || {};

  return (
    <div className="font-andika">
      <Link to={`/shop/${_id}`}>
        <div className="p-4 card h-[400px] rounded bg-[#e9f1ea]">
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
        </div>
      </Link>
    </div>
  );
};

ShopCard.propTypes = {
  item: PropTypes.object,
};

export default ShopCard;
