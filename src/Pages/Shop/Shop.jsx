import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import useAxiosPublic from "../../axios/axiosPublic";
const Shop = () => {
  const [shop, setShop] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get("/products").then((res) => {
      setShop(res.data);
      setIsLoading(false);
    });
  }, [axiosPublic]);
  if (isLoading)
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div>
      {/* banner */}
      <div className="hero h-96 relative" style={{ backgroundImage: 'url(https://i.imgur.com/WTXqvCy.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Services We Offer</h1>
            <p className="mb-5">Explore Our Waste Management Solutions.</p>
          </div>
        </div>
      </div>
      
      {/* content */}
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
