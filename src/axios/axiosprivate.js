import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
export const axiosPrivate = axios.create({
//  baseURL: "http://localhost:8085",
  // baseURL: "https://eco-smart-bin.vercel.app",
  // baseURL: "https://eco-smart-bin.vercel.app",
    baseURL: "https://ecosmart-bins-server-side.onrender.com",
  withCredentials: true,
});
export const UseAxiosPrivate = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // request interceptor to add authorization header for every secure call to teh api
  axiosPrivate.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosPrivate.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};
export default UseAxiosPrivate;
