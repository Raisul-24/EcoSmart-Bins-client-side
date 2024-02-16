import Banner from "./Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Service from "../../Components/AllService/AllService";
import ChoseUs from "./ChoseUs";
import Feedback from "./Feedback";
import Subscribe from "../../Components/subscribe/Subscribe";
import RecycleMaterials from "../../Components/recycle materials/RecycleMaterials";
import Artwork from "./Artwork/Artwork";
import Counter from "./Counter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Counter />
      <ChoseUs />
      <RecycleMaterials />
      <FAQ />
      <Artwork />
      <Feedback />
      <Subscribe />
    </div>
  );
};

export default Home;
