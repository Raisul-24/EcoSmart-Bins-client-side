import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../axios/axiosprivate';

const useGetAService = (id)=>{
    const axios = useAxiosPrivate()
    const serviceData = async () =>{
        const {data} = await axios.get(`/services/${id}`)
        return data
    }
    const {data,isPending,refetch} = useQuery({
        queryKey: ['GetService',id],
        queryFn: serviceData
    })
    return [data,isPending,refetch]
}

export default useGetAService