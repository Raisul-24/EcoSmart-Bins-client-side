import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../axios/axiosPublic";

const getIndustriesApi = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const axios = useAxiosPublic();
  const serviceData = async () => {
    const { data } = await axios.get(`/industries`);
    return data;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isPending, refetch } = useQuery({
    queryKey: ["GetService"],
    queryFn: serviceData,
  });
  return [data, isPending, refetch];
};

export default getIndustriesApi;
