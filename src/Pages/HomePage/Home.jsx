import ChoseUs from "./ChoseUs";
import Hero from "./Hero";

import Banner from "./Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Service from "../../Components/Service/Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Service />
       <ChoseUs />
      <FAQ />
    </div>
  );
};

export default Home;
