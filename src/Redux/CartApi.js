import useAxiosPublic from "../axios/axiosPublic";

export const GetCartsData = async () => {
  const axios = useAxiosPublic();
  const response = await axios.get("/my-cart");
  return response.data;
};
