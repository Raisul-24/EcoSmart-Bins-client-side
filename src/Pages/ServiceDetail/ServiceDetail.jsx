import { useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";
//import toast from "react-hot-toast";
import { Cell, Legend, Pie, PieChart } from "recharts";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import ServiceDetailsDescription from "./ServiceDetailsDescription";
import ServiceDetailsFAQ from "./ServiceDetailsFAQ";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "pink"];

const ServiceDetail = () => {
  const { id } = useParams();
  const [data, dataLoading] = useGetAService(id);

  //  console.log(categories);

  //  custom service for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const pieChartData = { name: data?.category, value: 50 };
  //  console.log(data);

  if (dataLoading) {
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="font-andika">
      <ServiceDetailsBanner />
      <div className="md:grid grid-cols-9 gap-12 mx-8 xl:px-0 px-5 font-andika">
        {/* sidebar content */}
        <div className="col-span-3 mt-16">
          <ServiceDetailsSidebar />
        </div>
        {/* main content part */}
        <div className=" col-span-6">
          <div className="py-20 flex md:flex-row flex-col items-center">
            <div className="">
              <ServiceDetailsDescription />
              <ServiceDetailsFAQ />
              <div className="grid grid-cols-2 justify-center items-center gap-8 mt-20">
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
                <div className="col-span-1">
                  <div className="">
                    <PieChart width={400} height={400}>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        <Cell
                          key={`cell-${pieChartData?.index}`}
                          fill={COLORS[pieChartData?.index % COLORS.length]}
                        />
                      </Pie>
                      <Legend></Legend>
                    </PieChart>
                  </div>
                </div>
              </div>

              {/*<button
                onClick={() => toast.success("Service Added Successfully!")}
                className="btn lg:px-10 capitalize bg-gradient-to-r from-brand-color to-green-500 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-1/2"
              ></button>*/}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
