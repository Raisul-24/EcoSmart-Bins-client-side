import { PieChart } from "react-minimal-pie-chart";
import { useGetApiQuery } from "../../../../Redux/userApi/getApi";
import Linechart from "./LineChart";
import OverviewItem from "./OverviewItem";

const AdminOverview = () => {
  const { data, isLoading } = useGetApiQuery("/services");
  const { data: overViewData, isLoading: loading } =
    useGetApiQuery("/adminOverview");
  if (isLoading || loading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  // console.log(overViewData)

  const generateRandomColor = () => {
    const minGreen = 30; // Minimum green value
    const maxGreen = 255; // Maximum green value
    const green = Math.floor(Math.random() * (maxGreen - minGreen + 1)) + minGreen;
    const greenHex = green.toString(16).padStart(2, '0'); // Convert green value to hexadecimal
    return `#00${greenHex}00`;
  };

  const pieChartData = overViewData?.map((item, index) => ({
    title: item.name,
    value: item.total,
    color: generateRandomColor(),
    key: index, // Adding a unique key for each data point
  }));
// console.log(pieChartData)
  return (
    <div className="mt-16"> 
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {overViewData?.map((item, idx) => (
          <OverviewItem data={item} key={idx} />
        ))}
        <Linechart />
        <div className="lg:col-span-1 md:col-span-2 col-span-1">
          <div className="border border-brand-color flex flex-col p-5 rounded-xl">
            <h3 className="text-2xl font-bold capitalize text-center mb-5">
              our services
            </h3>
            {data?.map((item, idx) => (
              <p
                key={item?._id}
                className="text-lg flex gap-4 pb-1 font-medium"
              >
                <span className="text-xl block text-brand-color font-bold">
                  {++idx}.
                </span>{" "}
                {item?.title}
              </p>
            ))}
          </div>
        </div>
       
      </div>
      <div className="flex justify-start pl-0 lg:pl-32" >
        <PieChart animationDuration='3'
        lineWidth='50' className="max-w-96" data={pieChartData} />
        </div>
    </div>
  );
};

export default AdminOverview;