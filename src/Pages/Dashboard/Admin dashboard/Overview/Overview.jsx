import useUsers from "../../../../API/UserApi/useUsers";
import useAuth from "../../../../Hooks/UseAuth";
import UserOverview from "../../User Dashboard/UserOverview";
import WorkerOverview from "../../Worker Dashboard/WorkerOverview";
import AdminOverview from "./AdminOverview";

const Overview = () => {
  const { user, loading } = useAuth();

  const [allUsers, isPending] = useUsers();

  const isAdmin = allUsers?.filter(
    (data) => data?.role === "admin" && data?.email === user?.email
  );
  const isUser = allUsers?.filter(
    (data) => data?.role === "user" && data?.email === user?.email
  );
  const isWorker = allUsers?.filter(
    (data) => data?.role === "worker" && data?.email === user?.email
  );

  if (loading || isPending) {
    return (
      <div>
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }
  return (
    <>
      {isAdmin?.length > 0 && <AdminOverview />}
      {isWorker?.length > 0 && <WorkerOverview />}
      {isUser?.length > 0 && <UserOverview />}
    </>
  );
};

export default Overview;
