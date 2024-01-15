import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayOut></MainLayOut>,
     errorElement:<ErrorPage></ErrorPage>,
     children: [
      {
         path:"/",
         element: <Home></Home>
      }
     ]
   },
 ]);

export default router;