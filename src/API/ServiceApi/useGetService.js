import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../../axios/axiosPublic';

const useGetService = (q)=>{
    const axios = useAxiosPublic()
    const serviceData = async () =>{
        const {data} = await axios.get(`/services${q ? `?q=${q}` : ""}`)
        return data
    }
    const {data,isPending,refetch} = useQuery({
        queryKey: ['GetService'],
        queryFn: serviceData
    })
    return [data,isPending,refetch]
}

export default useGetService