import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../axios/axiosPublic";

const useGetBlog = (search) => {
  const axios = useAxiosPublic();
  const blogData = async () => {
    const { data } = await axios.get(`/blogs?search=${search}`);
    return data;
  };
  const { data, isPending, refetch } = useQuery({
    queryKey: ["GetBlog"],
    queryFn: blogData,
  });
  return [data, isPending, refetch];
};

export default useGetBlog;
