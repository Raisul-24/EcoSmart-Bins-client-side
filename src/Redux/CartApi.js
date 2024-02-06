import useAxiosPublic from "../axios/axiosPublic";
import useAuth from "../API/useAuth/useAuth";

const GetCartsData = async () => {
  const { user } = useAuth();
  const axios = useAxiosPublic();
  const response = await axios.get(`/my-cart?email=${user?.email}`);
  //  console.log(response.data);
  return response.data;
};
export default GetCartsData;
