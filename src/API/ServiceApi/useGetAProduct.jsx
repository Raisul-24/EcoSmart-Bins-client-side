import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../../axios/axiosPublic';

const useGetAProduct = (id)=>{
    const axios = useAxiosPublic()
    const productData = async () =>{
        const {data} = await axios.get(`/products/${id}`)
        // console.log(data);
        return data
        
    }
  
    const {data,isPending,refetch} = useQuery({
        queryKey: ['getProduct',id],
        queryFn: productData
    })
    return [data,isPending,refetch]
}

export default useGetAProduct