import useAxiosPublic from "../axios/axiosPublic";

export const GetCartsData = async () => {
  const axios = useAxiosPublic();
  const response = await axios.get("/my-cart");
  //  console.log(response.data);
  return response.data;
};
export default GetCartsData;

