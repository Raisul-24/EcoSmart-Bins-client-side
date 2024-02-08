import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../axios/axiosPublic";

const useGetTeam = () => {
  const axios = useAxiosPublic();
  const teamData = async () => {
    const { data } = await axios.get(`/team`);
    return data;
  };
  const { data, isPending, refetch } = useQuery({
    queryKey: ["GetTeam"],
    queryFn: teamData,
  });
  return [data, isPending, refetch];
};

export default useGetTeam;
