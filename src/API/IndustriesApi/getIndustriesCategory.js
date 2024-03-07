import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../axios/axiosPublic";

const getIndustriesCategory = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const axios = useAxiosPublic();
  const servicesData = async () => {
    const { data } = await axios.get(`/industries-category`);

    return data;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isPending, refetch } = useQuery({
    queryKey: ["getCategory", id],
    queryFn: servicesData,
  });
  return [data, isPending, refetch];
};

export default getIndustriesCategory;
