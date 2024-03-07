import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useGetApiQuery } from "../../../Redux/userApi/getApi";
import UseAxiosPrivate from "../../../axios/axiosprivate";
import Swal from "sweetalert2";


const Application = () => {
    const { data, isLoading: isPending } = useGetApiQuery("application");
    const axiosPrivate = UseAxiosPrivate();
    if (isPending)
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
    const handleDeleteItem = (item) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3A9E1E",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosPrivate.delete(`/application/${item._id}`)
              .then((res) => {
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Application has been deleted.",
                    icon: "success",
                  });
                }
              });
          }
        });
    
      };
    return (
        <div>
            <SectionTitle heading={"manage all applicant"} />
            <div className="overflow-x-auto">
                <table className="table w-full">
                <thead className="text-center bg-brand-color text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Details</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {data?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                   {item.name}
                  </td>
                  <td>{item.position}</td>
                  <td>{item.email}</td>
                  <td> {item.phone}</td>
                  
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
                          Applicant details
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
                          </div>
                        </div>
                        <div className="text-start text-lg capitalize mt-5 flex gap-1">
                          <p className="text-brand-color">Job Position:</p>
                          <p>{item?.position}</p>
                        </div>
                        <div className="text-start text-lg capitalize mt-5 flex gap-1">
                          <p className="text-brand-color">Resume Link:</p>
                          <p>{item?.resume}</p>
                        </div>
                        <div className="text-start text-lg capitalize mt-5 flex gap-1">
                          <p className="text-brand-color">About Applicant:</p>
                          <p>{item?.about} </p>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
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
        </div>
    );
};

export default Application;