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
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import UpdateServices from "../Pages/UpdateServices/UpdateServices";
import ManageProducts from "./../Pages/Dashboard/Admin dashboard/ManageProducts";
import PickUpReq from "../Pages/PickUpReq/PickUpReq";
import SingleShopProduct from "../Pages/Shop/SingleShopProduct";
import ParchesShopProduct from "../Pages/Shop/ParchesShopProduct";
import UpdateProducts from "../Components/UpdateProducts/UpdateProducts";
import ManageShowcase from "../Pages/Dashboard/Admin dashboard/ManageShowcase";
import ManageUser from "../Pages/Dashboard/Admin dashboard/ManageUser";
import PriceTable from "../Pages/PriceTable/PriceTable";
import PickupWork from "../Pages/Dashboard/Worker Dashboard/PickupWork";
import OnGoingWork from "../Pages/Dashboard/Worker Dashboard/OnGoingWork";
import RewardPoints from "../Pages/Dashboard/User Dashboard/rewardPoints";
import CompleteWorks from "../Pages/Dashboard/Worker Dashboard/CompleteWorks";
import Checkout from "../Components/Checkout/Checkout";
import Teams from "../Pages/teams/Teams";
import Profile from "../Components/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/team",
        element: <Teams></Teams>,
      },
      {
        path: "/shop/:id",
        element: <SingleShopProduct></SingleShopProduct>,
      },
      {
        path: "/shop-parches/:id",
        element: <ParchesShopProduct></ParchesShopProduct>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        loader: () => fetch("/blogs.json"),
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/pickUpReq",
        element: <PickUpReq />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/priceTable",
        element: <PriceTable></PriceTable>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin dashboard
      {
        path: "/dashboard/adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "/dashboard/addServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/dashboard/updateServices/:id",
        element: <UpdateServices></UpdateServices>,
      },
      {
        path: "/dashboard/manageServices",
        element: <ManageServices></ManageServices>,
      },
      {
        path: "/dashboard/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "/dashboard/updateProducts/:id",
        element: <UpdateProducts></UpdateProducts>,
      },
      {
        path: "/dashboard/manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/dashboard/managePickup",
        element: <ManagePickup></ManagePickup>,
      },
      {
        path: "/dashboard/manageShowcase",
        element: <ManageShowcase></ManageShowcase>,
      },

      // worker dashboard
      {
        path: "/dashboard/PickupWork",
        element: <PickupWork></PickupWork>,
      },
      {
        path: "/dashboard/OnGoingWork",
        element: <OnGoingWork></OnGoingWork>,
      },
      {
        path: "/dashboard/CompleteWorks",
        element: <CompleteWorks></CompleteWorks>,
      },

      // user dashboard
      {
        path: "/dashboard/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/addShowcase",
        element: <AddShowcase></AddShowcase>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/RewardPoints",
        element: <RewardPoints></RewardPoints>,
      },
      {
        path: "/dashboard/feedback",
        element: <FeedbackAndRatings></FeedbackAndRatings>,
      },
      {
        path: "/dashboard/payment",
        element: <MakePayment></MakePayment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
