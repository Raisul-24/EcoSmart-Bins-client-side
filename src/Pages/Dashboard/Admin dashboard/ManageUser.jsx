import { useGetApiQuery } from "../../../Redux/userApi/getApi";

const ManageUser = () => {
  const { data, isLoading } = useGetApiQuery("/users");
  if (isLoading) {
    return;
  }
  console.log(data,isLoading);

  return <div></div>;
};

export default ManageUser;
