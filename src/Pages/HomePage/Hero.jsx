import img1 from "../../assets/images/cleaner.webp";
import img2 from "../../assets/images/smarter.webp";
import img3 from "../../assets/images/greener.jpeg";

const Hero = () => {
  return (
    <>
      <div className="mt-12">
        {/* cleaner */}
        <div className="">
          <img
            data-aos="zoom-in-right"
            src={img1}
            className="h-[400px] w-full"
          />
          <div className="text-[#ffffff] bg-brand-color md:h-[400px] w-full flex flex-col justify-center items-center gap-5 px-12 py-8">
            <h1 className="md:text-5xl text-4xl font-semibold md:font-bold">
              All Together Cleaner
            </h1>

            <p className="text-2xl">
              We make your space clean, beautiful, and welcoming.
            </p>
            <div className="md:flex gap-6 pt-4 py-8">
              <div>
                <h5 className="text-xl font-bold py-4">
                  A Fundamentally Better Bin
                </h5>
                <p>
                  Once waste goes in, it can’t come out. A fully enclosed bin
                  means no visible waste and no windblown litter, eliminating a
                  food source for pests and keeping your space safer.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold py-4">
                  Bigger Capacity, Same Footprint
                </h5>
                <p>
                  High waste volume locations? Our compactors hold 5x the
                  capacity of traditional bins, which means fewer collections
                  and cleaner, quieter spaces.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold py-4">
                  Take Control of your Space
                </h5>
                <p>
                  Don’t let your waste control you. You’ll know to collect
                  before waste overflows happen, so you’re always the one in
                  control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* smarter */}
        <div className="">
          <img
            data-aos="zoom-in-right"
            src={img2}
            className="h-[400px] w-full"
          />
          <div className="text-black bg-yellow-600 md:h-[400px] w-full flex flex-col justify-center items-center gap-5 px-12 py-8">
            <h1 className="md:text-5xl text-4xl font-semibold md:font-bold">
              All Together Smarter
            </h1>

            <p className="text-2xl">
              Our solution helps you make smarter decisions.
            </p>
            <div className="md:flex gap-8 pt-4">
              <div>
                <h5 className="text-xl font-bold py-4">Know When to Go</h5>
                <p>
                  Your space is dynamic: Pedestrian volume, weather, and more
                  are always changing. Our fullness-indicating and smart bins
                  eliminate overflows and help you know when and where to
                  collect.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold py-4">
                  Insights about your Space and Waste
                </h5>
                <p>
                  Take charge of your space with real-time data and long-term
                  insights on recycling diversion, waste volume, and collection
                  activities. Gain visibility and insights to better manage
                  system operational performance.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold py-4">
                  A Smarter Way to Collect
                </h5>
                <p>
                  Precise data and analytics can reduce collections by 80%.
                  Spend less time collecting waste and more time improving your
                  community or space.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* greener */}
        <div className="">
          <img
            data-aos="zoom-in-right"
            src={img3}
            className="h-[400px] w-full"
          />
          <div className="text-[#ffffff] bg-brand-color md:h-[400px] w-full flex flex-col justify-center items-center gap-5 px-12 py-8">
            <h1 className="md:text-5xl text-4xl font-semibold md:font-bold">
              All Together Greener
            </h1>

            <p className="text-2xl">
              Make a visible impact on the environment, your community, and
              beyond.
            </p>
            <div className="md:flex gap-8 pt-4">
              <div>
                <h5 className="text-xl font-bold py-4">Recycling Done Right</h5>
                <p>
                  Consistent and uniform recycling is key for communities to
                  achieve their zero-waste and sustainability goals, creating a
                  better world for everyone.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold py-4">Breathe Easy</h5>
                <p>
                  With fewer collections, communities can reduce fuel
                  consumption and GHG emissions by 70%.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold py-4">
                  Prevent Plastic Pollution
                </h5>
                <p>
                  Total containment eliminates windblown and pest-strewn litter,
                  preventing pollution in our rivers, lakes, and oceans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
