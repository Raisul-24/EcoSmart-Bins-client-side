import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:8085",
  baseURL: 'https://eco-smart-bin.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;