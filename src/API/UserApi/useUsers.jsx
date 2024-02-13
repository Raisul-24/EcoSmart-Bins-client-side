import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "../../axios/axiosprivate";

const useUsers = () => {
    const axios = UseAxiosPrivate();
    const usersData = async () => {
      const { data } = await axios.get(`/users`);
      return data;
    };
    const { data: allUsers, isPending, refetch } = useQuery({
      queryKey: ["users"],
      queryFn: usersData,
    });
    return [allUsers, isPending, refetch];
};

export default useUsers;