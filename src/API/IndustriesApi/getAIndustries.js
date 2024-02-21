import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "../../axios/axiosprivate";

const getAIndustries = (id) => {
  const axios = UseAxiosPrivate();
  const serviceData = async () => {
    const { data } = await axios.get(`/industry/${id}`);
    return data;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isPending, refetch } = useQuery({
    queryKey: ["GetService", id],
    queryFn: serviceData,
  });
  return [data, isPending, refetch];
};

export default getAIndustries;
