import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../LayOut/Dashboard";
import AdminProfile from "../Pages/Dashboard/Admin dashboard/AdminProfile";
import UserProfile from "../Pages/Dashboard/User Dashboard/UserProfile";
import AddServices from "../Pages/Dashboard/Admin dashboard/AddServices";
import ManageServices from "../Pages/Dashboard/Admin dashboard/ManageServices";


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
      }
     ]
   },
   {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [ 
      // admin dashboard
      {
          path: '/dashboard/adminProfile',
          element: <AdminProfile></AdminProfile>

      },
      {
        path: '/dashboard/addServices',
        element: <AddServices></AddServices>
      },
      {
        path: '/dashboard/manageServices',
        element: <ManageServices></ManageServices>
      },

      // user dashboard
      {
          path: '/dashboard/userProfile',
          element: <UserProfile></UserProfile>

      },
      // {
      //     path: '/dashboard/add-a-camp',
      //     element: 

      // },
      // {
      //     path: '/dashboard/manage-camps',
      //     element: 

      // },
      // {
      //     path: '/dashboard/update-camp/:id',
      //     element: <ManageCampForm></ManageCampForm>
      // },
      
    ]
   }
 ]);

export default router;