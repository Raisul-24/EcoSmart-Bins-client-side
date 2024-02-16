import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../axios/axiosPublic";

const getBlogCategories = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const axios = useAxiosPublic();
  const blogData = async () => {
    const { data } = await axios.get(`/categories`);
    return data;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isPending, refetch } = useQuery({
    queryKey: ["getCategory", id],
    queryFn: blogData,
  });
  return [data, isPending, refetch];
};

export default getBlogCategories;
