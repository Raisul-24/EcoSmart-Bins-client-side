import Banner from "./Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Service from "../../Components/Service/Service";
import ChoseUs from "./ChoseUs";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <ChoseUs />
      <FAQ />
      <Feedback/>
    </div>
  );
};

export default Home;
