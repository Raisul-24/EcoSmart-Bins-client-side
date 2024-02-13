import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useAuth = () => {
  const authUtils = useContext(AuthContext);
  return authUtils;
};

export default useAuth;
