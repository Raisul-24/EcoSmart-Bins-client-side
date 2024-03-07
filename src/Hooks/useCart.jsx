import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosPrivate, { axiosPrivate } from "../axios/axiosprivate";

const useCart = () => {
    const axiosPrivate = UseAxiosPrivate();
    const {user} = UseAuth();
    const {data: cart = [], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () =>{
            const res = await axiosPrivate.get(`/my-cart?email=${user.email}`);
            return res.data;
        }
    });
    return [cart, refetch];

};

export default useCart;