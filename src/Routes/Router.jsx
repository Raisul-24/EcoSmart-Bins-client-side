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
import AdminProfile from "../Pages/Dashboard/Admin dashboard/AdminProfile";
import UserProfile from "../Pages/Dashboard/User Dashboard/UserProfile";
import AddServices from "../Pages/Dashboard/Admin dashboard/AddServices";
import ManageServices from "../Pages/Dashboard/Admin dashboard/ManageServices";
import Shop from "../Pages/Shop/Shop";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import AddShowcase from "../Pages/Dashboard/User Dashboard/AddShowcase";
import Cart from "../Pages/Dashboard/User Dashboard/Cart";
import FeedbackAndRatings from "../Pages/Dashboard/User Dashboard/FeedbackAndRatings";
import AddProducts from "../Pages/Dashboard/Admin dashboard/AddProducts";
import MakePayment from "../Pages/Dashboard/User Dashboard/MakePayment";
import PaymentHistory from "../Pages/Dashboard/User Dashboard/PaymentHistory";
import ManagePickup from "../Pages/Dashboard/Admin dashboard/ManagePickup";


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
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
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
      {
        path: '/dashboard/addProducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/dashboard/manageProducts',
        element: <ManageServices></ManageServices>
      },
      {
        path: '/dashboard/managePickup',
        element: <ManagePickup></ManagePickup>
      },

      // user dashboard
      {
        path: '/dashboard/userProfile',
        element: <UserProfile></UserProfile>
      },  
      {
        path: '/dashboard/addShowcase',
        element: <AddShowcase></AddShowcase>
      },  
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/feedback',
        element: <FeedbackAndRatings></FeedbackAndRatings>
      },
      {
        path: '/dashboard/payment',
        element: <MakePayment></MakePayment>
    },
    {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
    },
    ]
   }
 ]);

export default router;