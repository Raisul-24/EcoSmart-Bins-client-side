import useAxiosPrivate from "../axios/axiosprivate";

const GetCartsData = async (email) => {
  const axios = useAxiosPrivate();
  const response = await axios.get(`/my-cart?email=${email}`);
  console.log(response.data);
  return response.data;
};
export default GetCartsData;
