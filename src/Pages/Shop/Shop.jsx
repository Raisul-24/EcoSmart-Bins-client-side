import { Link } from "react-router-dom";
import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
const Shop = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    fetch("/shop.json")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);
console.log(shop);
  return (
    <div>
      <SectionTitle heading={"shop"} subHeading={"Waste Less, Live More."} />
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          {shop?.map((item) => (
            <ShopCard key={item?.id} item={item}></ShopCard>
          ))}
        </div>
        {/*<div className="max-w-5xl mx-auto">
          <div className="mt-10  grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6">
            {brands?.map((brnd) => (
              <Link
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                key={brnd?.name}
                to={`/brand/${brnd?._id}`}
                className="p-4 rounded-sm border-2 shadow-2xl"
              >
                <div className="pb-4 ">
                  <h2 className="card-title md:text-3xl font-bold ">
                    {brnd?.name}
                  </h2>
                </div>
                <figure>
                  <img
                    className="md:h-72 rounded-sm hover:scale-[1.08] duration-1000"
                    src={brnd?.bannerPhoto}
                    alt="brand name"
                  />
                </figure>
              </Link>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Shop;
