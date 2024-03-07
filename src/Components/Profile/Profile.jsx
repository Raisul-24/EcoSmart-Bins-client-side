import { VscActivateBreakpoints } from "react-icons/vsc";
import useAuth from "../../Hooks/UseAuth";
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../axios/axiosPublic";


const Profile = () => {
    const { user, loading } = useAuth();
  const { data, isLoading } = useGetApiQuery(`/users/${user?.email}`);
  const [users, setUsers] = useState([]);
    const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
        .get("/users")
        .then((response) => {
            setUsers(response.data);
        })
        .catch((error) => {
        });
}, [axiosPublic]);

  if (loading) {
    return (
      <div>
        <div className="text-center mt-20">
          <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
                <figure className="px-10 pt-8">
                    <div className="">
                        {user ? (
                            <img
                                className="w-28 h-28 rounded-full border-4 border-brand-color"
                                src={user?.photoURL}
                                alt=""
                            />
                        ) : (
                            <img
                                className="w-28 h-28 rounded-full border-4 border-brand-color"
                                src="https://i.ibb.co/8X8stTp/user.webp"
                            />
                        )}
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    {data?.role === "user" &&
                        (isLoading ? (
                            ""
                        ) : (
                            <p className="px-5 py-3 bg-white flex items-center gap-2 rounded-full">
                                <VscActivateBreakpoints className="text-brand-color text-xl" />{" "}
                                <p className="font-bold">{data?.points}</p>
                            </p>
                        ))}
                    {user ? (
                        <h2 className="card-title text-xl"> {user?.displayName}</h2>
                    ) : (
                        <h2 className="card-title text-xl"> displayName</h2>
                    )}
                    {user ? (
                        <p className=" font-bold">{user?.email}</p>
                    ) : (
                        <p className=" font-bold">useremail</p>
                    )}
                    
                        <p className=" font-bold">{users?.role}</p>
                       
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;