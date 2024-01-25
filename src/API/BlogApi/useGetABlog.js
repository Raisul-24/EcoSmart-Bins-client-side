import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../axios/axiosprivate';

const useGetABlog = (id)=>{
    const axios = useAxiosPrivate()
    const blogData = async () =>{
        const {data} = await axios.get(`/blogs/${id}`)
        return data
    }
    const {data,isPending,refetch} = useQuery({
        queryKey: ['Getblog',id],
        queryFn: blogData
    })
    return [data,isPending,refetch]
}

export default useGetABlog