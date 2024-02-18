import useAuth from "../../../Hooks/UseAuth";
import { useGetApiQuery } from "../../../Redux/userApi/getApi";
import { IoMdCheckmark } from "react-icons/io";
import UseAxiosPrivate from "../../../axios/axiosprivate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const PickupWork = () => {
  const { data, isLoading, refetch } = useGetApiQuery("/pickupReqAll");
  const Navigate = useNavigate();
  const axios = UseAxiosPrivate();
  const { user } = useAuth();
  const handleClick = (id) => {
    const email = user?.email;
    const status = {status: 'ongoing'}
    axios
      .patch(`/pickupReq/${id}`, { email })
      .then(() => {
        axios.patch(`/statusUpdate/${id}`,status);
        toast.success("you accept the request");
        refetch();
        Navigate("/dashboard/OnGoingWork");
      })
      .catch(() => {
        toast.error("fail to accept");
      });
  };

  return (
    <div className="font-andika">
      <div className="border-b-2">
        <h2 className="text-4xl mb-5 text-center ">Pickup Work</h2>
      </div>
      {isLoading ? (
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center bg-brand-color text-white">
              <tr>
                <th>Image</th>
                <th>Email</th>
                <th>Price</th>
                <th>status</th>
                <th>details</th>
                <th>Add to Ongoing</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {data?.map((item) => (
                <tr key={item?._id}>
                  <th>
                    <div className="avatar">
                      {item?.photo ? (
                        <div className="w-10 rounded-full">
                          <img
                            src={item?.photo}
                            alt={item?.name}
                            className=""
                          />
                        </div>
                      ) : (
                        <p className="w-10 rounded-full bg-brand-color flex justify-center items-center text-lg text-white">
                          {item?.email.slice(0, 1).toUpperCase()}
                        </p>
                      )}
                    </div>
                  </th>
                  <td>{item?.email}</td>
                  <td>{item?.price}</td>
                  <td>
                    <h2
                      className={`badge ${item?.status === "requested" &&
                        "bg-red-600"} ${item?.status === "ongoing" &&
                        "bg-yellow-500"} ${item?.status === "complete" &&
                        "bg-brand-color"} border-none text-white capitalize`}
                    >
                      {item?.status}
                    </h2>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        document.getElementById(item?._id).showModal()
                      }
                      className="rounded-full w-7 h-7 bg-brand-color text-white font-bold"
                    >
                      i
                    </button>
                    <dialog id={item?._id} className="modal">
                    <div className="modal-box bg-white">
                        <h3 className="text-2xl font-bold capitalize text-brand-color">
                          pickup details
                        </h3>
                        <div className="flex items-center gap-5 mt-5">
                          <div className="avatar">
                            {item?.photo ? (
                              <div className="w-9 rounded-full">
                                <img
                                  src={item?.photo}
                                  alt={item?.name}
                                  className=""
                                />
                              </div>
                            ) : (
                              <p className="w-9 rounded-full bg-brand-color flex justify-center items-center text-lg text-white">
                                {item?.email.slice(0, 1).toUpperCase()}
                              </p>
                            )}
                          </div>
                          <div className="text-start">
                            <h4>{item?.name}</h4>
                            <p>{item?.email}</p>
                            <p>{item?.date}</p>
                          </div>
                        </div>
                        <div className="text-start text-lg capitalize mt-5 flex gap-1">
                          <p className="text-brand-color">pickup address:</p>
                          <p>{item?.address}</p>
                        </div>
                        <div className="text-start text-lg capitalize mt-5 flex gap-1">
                          <p className="text-brand-color">Service Type:</p>
                          <p>{item?.enquiryType}</p>
                        </div>
                        <div className="text-start text-lg capitalize mt-5 flex gap-1">
                          <p className="text-brand-color">Container:</p>
                          <p>{item?.container} Gallon Trash</p>
                        </div>
                        <div className="text-start">
                          <p className="space-x-2">
                            <span className="text-lg">status:</span>{" "}
                            <h2
                              className={`badge ${item?.status ===
                                "requested" && "bg-red-600"} ${item?.status ===
                                "ongoing" && "bg-yellow-500"} ${item?.status ===
                                "complete" &&
                                "bg-brand-color"} border-none text-white capitalize`}
                            >
                              {item?.status}
                            </h2>
                          </p>
                          {item?.workerEmail ? (
                            <p>
                              <span className="text-lg">worker email:</span>{" "}
                              {item?.workerEmail}
                            </p>
                          ) : (
                            <p className="capitalize text-center mt-5">
                              no one accept yet
                            </p>
                          )}
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>
                  <td>
                    <button
                      onClick={() => handleClick(item?._id)}
                      className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
                    >
                      <IoMdCheckmark />
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

export default PickupWork;
