import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  const { _id, title, img, price } = item || {};

  return (
    <div>
      <div className=" ">
        <Link
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          key={_id}
          to={`/shop/${_id}`}
          className="p-4 card rounded bg-[#e9f1ea]"
        >
          <div className="pb-4 ">
            <h2 className="text-brand-color md:text-2xl font-bold pb-2 text-center">
              {title}
            </h2>
            <h2 className=" md:text-xl font-bold text-center text-[#f29620] ">
              ${price}
            </h2>
          </div>
          <figure>
            <img
              className="md:h-80  rounded hover:scale-[1.08] duration-1000"
              src={img}
              alt="shop item"
            />
          </figure>
        </Link>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  item: PropTypes.object,
};

export default ShopCard;
