import { useEffect, useState } from "react";
import useAxiosPublic from "../../axios/axiosPublic";


const Artwork = () => {
    const [artworks, setArtworks] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/artworks")
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((error) => {
        console.log("Error fetching:", error);
      });
  }, [axiosPublic]);

    return (
        <div className="max-w-7xl mx-auto xl:px-0 px-5 mb-20 lg:py-20">
            <h2 className=" text-center pt-5 text-4xl font-bold  text-[#101a30] mb-5">Welcome to Our Waste Art Showcase!</h2>
            <p className="text-xl text-brand-color text-center font-semibold mb-10">Discover the Beauty of Waste Transformation</p>
            <p className="w-2/3 mx-auto text-center text-xl">At SmartEcoBin, we celebrate creativity that knows no bounds. Our Waste Art Showcase is a vibrant gallery where individuals turn everyday waste into extraordinary masterpieces. Explore the gallery below to witness the transformative power of art and sustainability.</p>
        </div>
    );
};

export default Artwork;