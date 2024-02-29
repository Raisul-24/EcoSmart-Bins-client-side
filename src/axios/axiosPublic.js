import axios from "axios";
import { axiosPrivate } from "./axiosprivate";

export const axiosPublic = axios.create({
  baseURL: axiosPrivate.defaults.baseURL,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
