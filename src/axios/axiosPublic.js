import axios from "axios";

const axiosPublic = axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:8085",
});
=======
    // baseURL: 'http://localhost:8085'
    baseURL: 'https://eco-smart-bin.vercel.app'
})
>>>>>>> 537b5b0310dc095f775e94a62600f59112492b9c

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
