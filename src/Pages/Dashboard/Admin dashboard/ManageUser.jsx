import { useGetApiQuery } from "../../../Redux/userApi/getApi";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosPrivate from "../../../axios/axiosprivate";
import toast from "react-hot-toast";

const ManageUser = () => {
  const axios = useAxiosPrivate();
  const { data: users, isLoading, refetch } = useGetApiQuery("/users");
  const handlechange = (e, id) => {
    const changeRole = { role: e.target.value };
    axios
      .patch(`/user/${id}`, changeRole)
      .then(() => {
        refetch();
        toast.success("Role update successfully");
      })
      .catch(() => toast.error("Fail to update"));
  };
  const handleDelete = (id) => {
    axios
      .delete(`/user/${id}`)
      .then(() => {
        refetch();
        toast.success("user delete successfully");
      })
      .catch(() => toast.error("Fail to delete"));
  };
  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="font-andika">
        <div className="flex justify-evenly mb-5 text-2xl md:text-3xl font-semibold">
          <h2 className="">All Users</h2>
          <h2 className="">Total Users: {users.length}</h2>
         
        </div>
        <hr />
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user._id}>
                  <th>
                    <div className="avatar">
                      {user?.photo ? (
                        <div className="w-10 rounded-full">
                          <img
                            src={user?.photo}
                            alt={user?.name}
                            className=""
                          />
                        </div>
                      ) : (
                        <p className="w-10 rounded-full bg-brand-color flex justify-center items-center text-lg text-white">
                          {user?.email.slice(0, 1).toUpperCase()}
                        </p>
                      )}
                    </div>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <h2
                      className={`badge ${user?.role === "admin" &&
                        "bg-green-900"} ${user?.role === "user" &&
                        "bg-brand-color"} ${user?.role === "worker" &&
                        "bg-yellow-700"} border-none text-white capitalize`}
                    >
                      {user?.role}
                    </h2>
                  </td>
                  <td>
                    <select
                      onChange={(e) => handlechange(e, user?._id)}
                      className="select select-bordered select-sm w-full capitalize"
                      defaultValue={user?.role}
                    >
                      <option>user</option>
                      <option>worker</option>
                      <option>admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-lg"
                      onClick={() => handleDelete(user?._id)}
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
