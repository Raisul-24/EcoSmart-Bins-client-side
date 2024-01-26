import toast from "react-hot-toast";
import useGetService from "../../../API/ServiceApi/useGetService";
import useAxiosPrivate from "../../../axios/axiosprivate";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const ManageServices = () => {
  const axios = useAxiosPrivate();
  const [data, dataLoaing, refetch] = useGetService();

  const DeleteFun = (id) => {
    axios
      .delete(`/services/${id}`)
      .then(() => refetch())
      .then(() => toast.success("the Service Delete Successfully"));
  };
  return (
    <div>
      <div className="border-b-2">
        <h2 className="text-4xl mb-5 text-center ">Manage Service Data</h2>
      </div>
      {dataLoaing ? (
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center bg-brand-color ">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Service Name</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {data?.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-decagon  w-12 h-12">
                          <img
                            src={item?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.title}</td>
                  <td className="text-right">
                    <Link
                      to={`/services/${item?._id}`}
                      className="btn btn-ghost hover:text-brand-color"
                    >
                      See Details
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/updateServices/${item?._id}`}
                      className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => DeleteFun(item)}
                      className="btn rounded-lg btn-sm bg-red-600 hover:bg-red-700 text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
