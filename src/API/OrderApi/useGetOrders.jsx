
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../axios/axiosPublic";




const useGetOrders = () => {
    const axios = useAxiosPublic()
    const orders = async() => {
        const { data } = await axios.get(`/order`)
        return data;
    }
   const {data: allOrders, refetch, isloading} = useQuery({
    queryKey: ["order"],
    queryFn: orders,
   })
   return [allOrders, refetch, isloading]
};

export default useGetOrders;