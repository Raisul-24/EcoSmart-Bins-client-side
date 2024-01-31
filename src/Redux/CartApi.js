import axios from "../axios/axiosPublic";

export const getCartsData = async () => {
  const response = await axios.get("/my-cart");
  return response.data;
};
