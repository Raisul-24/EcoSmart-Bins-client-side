import useAxiosPublic from "../axios/axiosPublic";

export const GetCartsData = async () => {
  const axios = useAxiosPublic();
  const response = await axios.get("/my-cart");
  console.log(response.data);
  return response.data;
};
export default getCartsData;

//import useAxiosPublic from "../axios/axiosPublic";
//
//const getCartsData = async () => {
//  // eslint-disable-next-line react-hooks/rules-of-hooks
//  const axiosInstance = useAxiosPublic();
//  try {
//    const response = await axiosInstance.get("/my-cart");
//    const data = response.data;
//    console.log(data);
//  } catch (error) {
//    console.error("Error fetching data:", error);
//  }
//};
//
