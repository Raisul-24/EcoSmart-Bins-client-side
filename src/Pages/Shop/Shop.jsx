import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import useAxiosPublic from "../../axios/axiosPublic";
const Shop = () => {
  const [shop, setShop] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/products").then((res) => {
      setShop(res.data);
    });
  }, [axiosPublic]);

  return (
    <div>
      <SectionTitle heading={"shop"} subHeading={"Waste Less, Live More."} />
      <div>
        <div className="mx-8 my-12 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          {shop?.map((item) => (
            <ShopCard key={item?.id} item={item}></ShopCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
