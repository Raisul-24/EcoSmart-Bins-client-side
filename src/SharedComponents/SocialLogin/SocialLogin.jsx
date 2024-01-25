import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../axios/axiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SocialLogin = () => {
   const { googleSignIn, githubSignIn } = UseAuth();
   const axiosPublic = useAxiosPublic();

   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";
   // console.log('state in the location login page', location.state)

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            toast.success('Sign In with Google Successfully');
            console.log(result.user);
            const userInfo = {
               email: result.user?.email,
               name: result.user?.displayName
            }
            // axiosPublic.post('/users', userInfo)
               .then(res => {
                  console.log(res.data);
                  if (location.state && location.state.from) {
                     navigate(location.state.from.pathname)
                  }
                  else {
                     navigate(from, { replace: true });
                  }
               })
         })
   }
   const handleGithubSignIn = () => {
      githubSignIn()
         .then(result => {
            toast.success('Sign In with Github Successfully');
            console.log(result.user);
            const userInfo = {
               email: result.user?.email,
               name: result.user?.displayName
            }
            // axiosPublic.post('/users', userInfo)
               .then(res => {
                  console.log(res.data);
                  if (location.state && location.state.from) {
                     navigate(location.state.from.pathname)
                  }
                  else {
                     navigate(from, { replace: true });
                  }
               })
         })
   }
   return (
      <div className="flex justify-center my-5 w-full gap-x-5">
      <div className="rounded-full text-4xl  btn w-1/4 bg-gradient-to-r from-brand-color to-green-100 hover:bg-gradient-to-r hover:from-green-100 hover:to-brand-color 
      text-center align-middle font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
      onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></div>
      <div className="rounded-full text-4xl  btn w-1/4 bg-gradient-to-r from-brand-color to-green-100 hover:bg-gradient-to-r hover:from-green-100 hover:to-brand-color 
      text-center align-middle font-bold uppercase shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
      onClick={handleGithubSignIn}><FaGithub className="text-black"></FaGithub></div>
   </div>
   );
};

export default SocialLogin;