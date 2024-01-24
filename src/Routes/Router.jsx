import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../LayOut/Dashboard";


const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayOut></MainLayOut>,
     errorElement:<ErrorPage></ErrorPage>,
     children: [
      {
         path:"/",
         element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      }
     ]
   },
   {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
   }
 ]);

export default router;