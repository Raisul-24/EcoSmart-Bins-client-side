import banner from "../../assets/BannerImages/shopBanner.webp";
import IndustriesCard from "./IndustriesCard";
import getIndustriesApi from "../../API/IndustriesApi/getIndustriesApi";

const Industries = () => {
  const [data, dataLoading] = getIndustriesApi();
  //  console.log(data);

  return (
    <div className="font-andika">
      {/* banner */}
      <div
        className="hero h-[500px] relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="mb-5 text-7xl font-extrabold">Industries</h1>
            <p className="mb-5 text-xl font-bold">
              We understand that we must lead by example and are committed to
              further improving health and wellbeing in our sector because we
              have been awarded five star grading for strong progress.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto xl:px-0 px-5 mb-20">
        <div className="text-center pt-28">
          <p className="text-xl font-bold text-[#f29829]">
            Safe And Trusted Waste Collection Service
          </p>
          <h2 className="text-4xl font-bold pt-8">
            Devoted & Trustworthy Waste <br /> Collection Services
          </h2>
        </div>
        {dataLoading ? (
          <div className="text-center py-20">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mx-8 py-20">
            {data?.map((item) => (
              <IndustriesCard key={item?._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Industries;
