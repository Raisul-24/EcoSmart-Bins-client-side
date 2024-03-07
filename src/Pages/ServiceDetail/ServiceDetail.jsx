import ServiceDetailsBanner from "./ServiceDetailsBanner";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import ServiceDetailsDescription from "./ServiceDetailsDescription";
import ServiceDetailsFAQ from "./ServiceDetailsFAQ";
import Btn from "../../Components/Btn";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

const ServiceDetail = () => {
  return (
    <div className="font-andika">
      <ServiceDetailsBanner />

     <div className="container mx-auto">
     <div className="md:grid grid-cols-9 gap-12 mx-8 xl:px-0 px-5 font-andika">
        <div className="col-span-3 mt-16">
          <ServiceDetailsSidebar />
        </div>
        <div className="md:col-span-6">
          <div className="py-20 px-5 md:flex md:flex-row flex-col items-center">
            <div>
              <ServiceDetailsDescription />
              <ServiceDetailsFAQ />
              <div className="mt-14 md:grid grid-cols-2 gap-8 md:px-0 px-5">
                <div className="col-span-1">
                  <h4 className="text-3xl font-bold pb-6">Stats & Charts</h4>
                  <p>
                    Our mix of company-owned and contractor assets allows us to
                    retain optimal levels of control whilst expanding our reach
                    to over 96% of towns in Australia. With 40 years of LTL
                    experience, we are now a trusted LTL freight provider for
                    shippers of all sizes and commodity types. <br /> <br /> Our
                    LTL service extends to all states and territories, and
                    includes multiple per-week services to places many others
                    only serve occasionally, including Darwin, Alice Springs,
                    Newman, Mt. Isa, Launceston and Burnie. <br /> <br /> We
                    pride ourselves on providing the best transport and shipping
                    services currently available in Australia. Our skilled
                    personnel, utilising the latest communications, tracking and
                    processing software, combined with decades of experience,
                    ensure all freight is are shipped, trans-shipped.
                  </p>
                </div>
                <div className="flex justify-center mt-8 col-span-1">
                  <div className="">
                    <PieChart
                      data={[
                        {
                          title: "Residential Waste",
                          value: 18,
                          color: "#E38627",
                        },
                        {
                          title: "Commercial Waste",
                          value: 15,
                          color: "#C13C37",
                        },
                        {
                          title: "Dumpster Rental",
                          value: 20,
                          color: "#F15A0E",
                        },
                        {
                          title: "Industrial Cleaning",
                          value: 25,
                          color: "#FFC300 ",
                        },
                        {
                          title: "Industrial Cleaning",
                          value: 29,
                          color: "#DAF7A6",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <Link to={"/pickUpReq"} className="w-full">
                <Btn className="mt-16 w-48">Get Service</Btn>
              </Link>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ServiceDetail;
