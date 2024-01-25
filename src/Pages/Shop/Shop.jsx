import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
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
        <div className="mx-8 my-12 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          {shop?.map((item) => (
            <ShopCard key={item?.id} item={item}></ShopCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
