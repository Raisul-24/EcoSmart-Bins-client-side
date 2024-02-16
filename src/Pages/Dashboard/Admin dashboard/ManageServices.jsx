import toast from "react-hot-toast";
import useAxiosPrivate from "../../../axios/axiosprivate";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "../../../Redux/ServiceSlice";
import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const ManageServices = () => {
  const axios = useAxiosPrivate();
  const dispatch = useDispatch()
  const {service:data, isLoading:dataLoaing} = useSelector((state)=> state.services)
  useEffect(()=>{
    dispatch(fetchService())
  },[dispatch])

  const DeleteFun = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3A9E1E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete(`/services/${id}`)
        .then(() => dispatch(fetchService()))
        .then(() => toast.success("the Service Delete Successfully"));
      }
    });
  };
  return (
    <div className="font-andika">
      <div className="">
      <SectionTitle heading={"manage all service"}/>
      </div>
      {dataLoaing ? (
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center bg-brand-color text-white">
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
                    <div className="">
                      <div className="avatar">
                        <div className="mask rounded-full w-12 h-12">
                          <img
                            src={item?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.title}</td>
                  <td className="text-center">
                    <Link
                      to={`/services/${item?._id}`}
                      className="btn btn-sm rounded-full w-8 h-8 bg-brand-color text-white hover:bg-white hover:text-brand-color font-bold"
                    >
                      i
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/updateServices/${item?._id}`}
                      className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
                    >
                     <FaRegEdit/>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => DeleteFun(item?._id)}
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
