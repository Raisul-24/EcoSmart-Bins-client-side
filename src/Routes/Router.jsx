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
import Cart from "../Pages/Dashboard/User Dashboard/Cart";
import FeedbackAndRatings from "../Pages/Dashboard/User Dashboard/FeedbackAndRatings";
import AddProducts from "../Pages/Dashboard/Admin dashboard/AddProducts";
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
import CompleteWorks from "../Pages/Dashboard/Worker Dashboard/CompleteWorks";
import Checkout from "../Components/Checkout/Checkout";
import Teams from "../Pages/teams/Teams";
import Profile from "../Components/Profile/Profile";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentFailed from "../Pages/Payment/PaymentFailed";
import Overview from "../Pages/Dashboard/Admin dashboard/Overview/Overview";
import PlacedOrder from "../SharedComponents/PlaceOrder/PlacedOrder";
import Industries from "../Pages/Industries/Industries";
import MyCart from "../Pages/MyCart/MyCart";
import IndustriesDetails from "../Pages/Industries/IndustriesDetails/IndustriesDetails";
import AddShowcase from "../Pages/Showcase/AddShowcase";
import Career from "../Pages/Career/Career";
import CareerDetails from "../Pages/Career/CareerDetails";
import ApplyForm from "../Pages/Career/ApplyForm";
import Application from "../Pages/Dashboard/Admin dashboard/Application";
import PickupRequest from "../Pages/Dashboard/User Dashboard/PickupRequest";
import PrivateRoute from "./PrivateRoute";
import WorkerOverview from "../Pages/Dashboard/Worker Dashboard/WorkerOverview";
import AddJob from "../Pages/Dashboard/Admin dashboard/AddJob";
import PaymentCancel from "../Pages/Payment/PaymentCancel";

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
        path: "/industries/:id",
        element: <IndustriesDetails></IndustriesDetails>,
      },
      {
        path: "/industries",
        element: <Industries></Industries>,
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
        element: <PrivateRoute><PickUpReq /></PrivateRoute>,
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
        element: <PrivateRoute><PriceTable></PriceTable></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/checkout/:id/:quantity",
        element: <Checkout></Checkout>,
      },
      {
        path: "/payment/success/:transaction_id",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:transaction_id",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "/payment/cancel",
        element: <PaymentCancel></PaymentCancel>
      },
      {
        path: "/placeOrder",
        element: <PlacedOrder></PlacedOrder>,
      },
      {
        path: "/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/addShowcase",
        element: <AddShowcase></AddShowcase>,
      },
      {
        path: "/career",
        element: <Career></Career>
      },
      {
        path: "/career/:id",
        element: <CareerDetails></CareerDetails>
      },
      {
        path: "/career/:id/apply",
        element: <ApplyForm></ApplyForm>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin dashboard
      {
        path: "overview",
        element: <Overview></Overview>,
      },
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "addServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "updateServices/:id",
        element: <UpdateServices></UpdateServices>,
      },
      {
        path: "manageServices",
        element: <ManageServices></ManageServices>,
      },
      {
        path: "addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "updateProducts/:id",
        element: <UpdateProducts></UpdateProducts>,
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "managePickup",
        element: <ManagePickup></ManagePickup>,
      },
      {
        path: "manageShowcase",
        element: <ManageShowcase></ManageShowcase>,
      },
      {
        path: "application",
        element: <Application></Application>,
      },
      {
        path: "job",
        element: <AddJob></AddJob>,
      },

      // worker dashboard
      {
        path: "PickupWork",
        element: <PickupWork></PickupWork>,
      },
      {
        path: "OnGoingWork",
        element: <OnGoingWork></OnGoingWork>,
      },
      {
        path: "CompleteWorks",
        element: <CompleteWorks></CompleteWorks>,
      },
      {
        path: 'workerOverview',
        element: <WorkerOverview></WorkerOverview>
      },

      // user dashboard
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "pickupRequest",
        element: <PickupRequest></PickupRequest>,
      },
      {
        path: "feedback",
        element: <FeedbackAndRatings></FeedbackAndRatings>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
