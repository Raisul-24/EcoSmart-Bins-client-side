import useAuth from "../../../Hooks/UseAuth";
import { useGetApiQuery } from "../../../Redux/userApi/getApi";
import OverviewItem from "../Admin dashboard/Overview/OverviewItem";
import Linechart from "./../Admin dashboard/Overview/LineChart";

const WorkerOverview = () => {
  const { user, loading } = useAuth();
  const { data: overViewData, isLoading } = useGetApiQuery(
    `/workerOverview/${user?.email}`
  );
  if (isLoading || loading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mt-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {overViewData?.map((item, idx) => (
          <OverviewItem data={item} key={idx} />
        ))}
        <Linechart />
        <div className="lg:col-span-1 md:col-span-2 col-span-1"></div>
      </div>
    </div>
  );
};

export default WorkerOverview;
