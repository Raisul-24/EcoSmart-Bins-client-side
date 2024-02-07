import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { useState } from "react";

const PriceTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-lg md:text-xl lg:text-3xl font-bold text-center text-green-600 my-5">
          Pricing Table
        </h2>
        <div className="flex justify-center">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-center text-black my-5 w-1/2">
            Not any hidden charge, choose our pricing plan
          </h2>
        </div>
        <div className="my-5 flex justify-center">
          <span className="text-xl font-extrabold mr-4">Monthly</span>
          <HeartSwitch
            size="lg"
            inactiveTrackFillColor="#ebfdc9"
            inactiveTrackStrokeColor="#07f92e"
            activeTrackFillColor="#70ff76"
            activeTrackStrokeColor="#4fff51"
            inactiveThumbColor="#ecfeff"
            activeThumbColor="#294B29"
            checked={isYearly}
            onChange={handleToggle}
          />
          <span className="text-xl font-extrabold ml-4">Yearly</span>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* cards 1*/}
          <div className="relative flex max-w-96 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                className="max-w-96"
                src="https://i.ibb.co/2NspHcw/Screenshot-2024-02-06-at-2-00-48-PM.png"
                alt="ui/ux review check"
              />
            </div>
            <div className="text-xl text-center text-black py-8">
              <h2>Holds: 2 Trash bags</h2>
              <h2 className="my-2">Serves: 1-2 people</h2>
              <h2>Max Weight: Approx 18kg</h2>
              <h2 className="my-2">Service: Every Day</h2>
              <h2 className="text-5xl text-green-600 font-extrabold mt-4 mb-2">
                {isYearly ? "$199.99" : "$19.99"}
              </h2>
              <h2>Per {isYearly ? "year" : "month"}</h2>
              <btn className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:from-green-300 hover:to-brand-color hover:bg-gradient-to-r my-7 max-w-48">
                Select Plan
              </btn>
            </div>
          </div>
          {/* cards 2*/}
          <div className="relative flex max-w-96 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                className="max-w-96"
                src="https://i.ibb.co/kSX40j3/Screenshot-2024-02-06-at-2-01-04-PM.png"
                alt="ui/ux review check"
              />
            </div>
            <div className="text-xl text-center text-black py-8">
              <h2>Holds: 2 Trash bags</h2>
              <h2 className="my-2">Serves: 1-2 people</h2>
              <h2>Max Weight: Approx 18kg</h2>
              <h2 className="my-2">Service: Every Day</h2>
              <h2 className="text-5xl text-green-600 font-extrabold mt-4 mb-2">
                {isYearly ? "$399.99" : "$49.99"}
              </h2>
              <h2>Per {isYearly ? "year" : "month"}</h2>
              <btn className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:from-green-300 hover:to-brand-color hover:bg-gradient-to-r my-7 max-w-48">
                Select Plan
              </btn>
            </div>
          </div>
          {/* cards 3*/}
          <div className="relative flex max-w-96 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                className="max-w-96"
                src="https://i.ibb.co/R0fB5ZD/Screenshot-2024-02-06-at-2-01-20-PM.png"
                alt="ui/ux review check"
              />
            </div>
            <div className="text-xl text-center text-black py-8">
              <h2>Holds: 2 Trash bags</h2>
              <h2 className="my-2">Serves: 1-2 people</h2>
              <h2>Max Weight: Approx 18kg</h2>
              <h2 className="my-2">Service: Every Day</h2>
              <h2 className="text-5xl text-green-600 font-extrabold mt-4 mb-2">
                {isYearly ? "$799.99" : "$79.99"}
              </h2>
              <h2>Per {isYearly ? "year" : "month"}</h2>
              <btn className="btn lg:px-5 bg-gradient-to-r from-brand-color to-green-300 lg:text-xl text-white hover:from-green-300 hover:to-brand-color hover:bg-gradient-to-r my-7 max-w-48">
                Select Plan
              </btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
