import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import ServiceDetailsDescription from "./ServiceDetailsDescription";
import ServiceDetailsFAQ from "./ServiceDetailsFAQ";
import useAxiosPublic from "../../axios/axiosPublic";

const COLORS = ["#257830", "#F72798", "#FF8042", "red", "blue"];

const ServiceDetail = () => {
  const [charts, setCharts] = useState([]);
  const axios = useAxiosPublic();

  // custom pie chart on service details
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/serviceDetails-chart");
        setCharts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axios, setCharts]);

  const pieChartData = charts.map((chart) => ({
    name: chart?.name,
    value: chart?.n,
  }));
  //  console.log(pieChartData);

  return (
    <div className="font-andika">
      <ServiceDetailsBanner />

      <div className="md:grid grid-cols-9 gap-12 mx-8 xl:px-0 px-5 font-andika">
        <div className="col-span-3 mt-16">
          <ServiceDetailsSidebar />
        </div>
        <div className="col-span-6">
          <div className="py-20 flex md:flex-row flex-col items-center">
            <div>
              <ServiceDetailsDescription />
              <ServiceDetailsFAQ />
              <div className="mt-14">
                <div className="">
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
                <div className="flex mt-8">
                  <div className="">
                    <PieChart width={600} height={60} data={pieChartData}>
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
                        {pieChartData?.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
