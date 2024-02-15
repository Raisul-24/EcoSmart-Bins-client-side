import { useEffect, useState } from "react";

import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../axios/axiosPublic";
import toast from "react-hot-toast";

const ManageShowcase = () => {
  const [showcase, setShowcase] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/showcase")
      .then((response) => {
        setShowcase(response.data);
      })
      .catch((error) => {
        console.log("Error fetching:", error);
      });
  }, [axiosPublic]);

  const handleStatus = (name, img, title, date, oldId) => {
    axiosPublic.post("/artworks", { name, img, title, date, oldId })
      .then((res) => {
        console.log(res.data)
        if (res.data.insertedId) {

          toast.success("New Art work Added Successfully");
        }
      });
  }

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
        axiosPublic.delete(`/showcase/${item._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });

  };
  return (
<<<<<<< HEAD
    <div className="">
=======
    <div className="font-andika">
>>>>>>> d6efde9ea50aaade55074c1e5b496f33630c5606
      <div>
        <div className="border-b-2 font-montserrat">
          <h2 className="text-4xl mb-5 text-center ">Manage Showcase</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center bg-brand-color text-lg text-white ">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {showcase?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-decagon  w-12 h-12">
                          <img
                            src={item.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>
                    <button
                      onClick={() => handleStatus(item.name, item.img, item.title, item.date, item._id)}
                      className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
                    >
                      Add</button>
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
    </div>
  );
};

export default ManageShowcase;