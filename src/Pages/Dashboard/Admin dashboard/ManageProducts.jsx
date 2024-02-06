import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useProducts from "../../../Hooks/useProducts";
import {  FaRegEdit, FaTrash } from "react-icons/fa";
import useAxiosPrivate from "../../../axios/axiosprivate";

const ManageProducts = () => {
  const [products, loading, refetch] = useProducts();
  const axiosPrivate = useAxiosPrivate()

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
        axiosPrivate.delete(`/products/${item._id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
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
    <div>
      <div className="border-b-2">
        <h2 className="text-4xl mb-5 text-center ">Manage Shop Data</h2>
      </div>
      {loading ? (
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
                <th>Products Name</th>
                <th>Price</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {products?.map((item, index) => (
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
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td className="text-right">
                    <Link
                      to={`/shop/${item._id}`}
                      className="btn btn-ghost hover:text-brand-color"
                    >
                      See Details
                    </Link>
                  </td>
                  <td>
                  <Link
                      to={`/dashboard/updateProducts/${item?._id}`}
                      className="btn btn-sm bg-gradient-to-r from-brand-color to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color  text-white"
                    >
                      <FaRegEdit/>
                    </Link>
                  
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
      )}
    </div>
  );
};

export default ManageProducts;
