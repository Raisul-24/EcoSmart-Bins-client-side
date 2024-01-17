

import Banner from "./Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Service from "../../Components/Service/Service";
import Footer from "../../Shared/Footer";


const Home = () => {
   return (
      <div>
         <Banner/>
         <Service/>
         <FAQ/>
         <Footer/>
      </div>
   );
};

export default Home;