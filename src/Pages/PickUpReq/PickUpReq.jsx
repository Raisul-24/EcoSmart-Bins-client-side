import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import PickUpForm from "./PickUpForm";
import banner from "../../assets/BannerImages/picupBanner.webp";

const PickUpReq = () => {
  return (
    <div className="font-andika">
      {/* banner */}
      <div className="hero h-96 relative" style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Request Pickup</h1>
            <p className="mb-5">Effortlessly Schedule Waste Collection</p>
          </div>
        </div>
      </div>
      <SectionTitle heading="Request Pickup"
        subHeading="24 Hour">
      </SectionTitle>
      <PickUpForm />

    </div>
  );
};

export default PickUpReq;