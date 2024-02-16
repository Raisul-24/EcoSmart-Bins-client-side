import { useGetApiQuery } from "../../../../Redux/userApi/getApi";
import Linechart from "./LineChart";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  const { data, isLoading } = useGetApiQuery("/services");
  const { data: overViewData, isLoading: loading } =
    useGetApiQuery("DashboardOverview");
  if (isLoading || loading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
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
    </div>
  );
};

export default Overview;
