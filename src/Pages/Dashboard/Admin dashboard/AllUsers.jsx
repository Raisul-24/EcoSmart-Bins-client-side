import { FaTrashAlt } from "react-icons/fa";
import useAxiosPrivate from "../../../axios/axiosprivate";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
   const axiosPrivate = useAxiosPrivate();
   const { data: users = [], refetch } = useQuery({
       queryKey: ['users'],
       queryFn: async () => {
           const res = await axiosPrivate.get('/users');
           return res.data;
       }
   })


   return (
      <div>
          <div className="font-montserrat">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'Admin' : <h2>user</h2>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
      </div>
   );
};

export default AllUsers;