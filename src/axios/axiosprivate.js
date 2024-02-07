import axios from "axios";
export const axiosPrivate = axios.create({
  baseURL: "http://localhost:8085",
  // baseURL: "https://eco-smart-bin.vercel.app",
  withCredentials: true,
});
const useAxiosPrivate = () => {
  return axiosPrivate;
};
export default useAxiosPrivate;
