import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosPrivate, { axiosPrivate } from "../axios/axiosprivate";

const useCart = () => {
    const axiosPrivate = UseAxiosPrivate();
    const {user} = UseAuth();
    // console.log(user.email);
    const {data: cart = [], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () =>{
            const res = await axiosPrivate.get(`/my-cart?email=${user.email}`);
            console.log(res.data.length);
            return res.data;
        }
    });
    return [cart, refetch];

};

export default useCart;