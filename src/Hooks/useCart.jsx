import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axios/axiosprivate";
import UseAuth from "./UseAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = UseAuth()
    const {data: cart = [], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/myCart?email=${user.email}`)
            return res.data
        }
    });
    return [cart, refetch]

};

export default useCart;