import Banner from "./Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Service from "../../Components/Service/Service";
import ChoseUs from "./ChoseUs";
import Feedback from "./Feedback";
import Subscribe from "../../Components/subscribe/Subscribe";
import Artwork from "./Artwork/Artwork";


const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <ChoseUs />
      <FAQ />
      <Artwork/>
      <Feedback/>
      <div className="">
      <Subscribe/>
      </div>
    </div>
  );
};

export default Home;
