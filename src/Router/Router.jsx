import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ContactUs from "../Pages/Contact";
import AddPaint from "../Pages/ServerPage/AddPaint";
import AllPaint from "../Pages/ServerPage/AllPaint";
import MyPaint from "../Pages/ServerPage/MyPaint";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import PaintDetails from "../Components/PaintDetails";
import UpdatePaint from "../Pages/ServerPage/UpdatePaint";
import CategoryPaint from "../Pages/ServerPage/CategoryPaint";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement: <Error></Error>,
      children: [
        {
            index : true,
            element : <Home></Home>,
            loader : () => fetch('https://server-site-navy.vercel.app/allHomePaint')
        },
        {
            path: '/paintDetails/:id',
            element : <PaintDetails></PaintDetails>,
            loader : ({params}) => fetch(`https://server-site-navy.vercel.app/paintDetails/${params.id}`)
        },
        {
          path: '/login',
          element : <Login></Login>
        },
        {
          path:'/register',
          element : <Register></Register>
        },
        {
          path:'/updateProfile',
          element : <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:'/contact',
          element :  <PrivateRoute> <ContactUs></ContactUs></PrivateRoute>
        },
        {
          path: '/addPaint',
          element : <PrivateRoute><AddPaint></AddPaint></PrivateRoute>
        },
        {
          path:'/updatingPaint/:id',
          element : <UpdatePaint></UpdatePaint>,
          loader : ({params}) => fetch(`https://server-site-navy.vercel.app/updatingPaint/${params.id}`)
        },
        {
          path: '/allPaint',
          element : <AllPaint></AllPaint>,
          loader : () => fetch('https://server-site-navy.vercel.app/allPaint')
        },
        {
          path: '/myPaint',
          element : <PrivateRoute><MyPaint></MyPaint></PrivateRoute>
        },
        {
          path: '/categoryPaint',
          element : <CategoryPaint></CategoryPaint>,
          loader : () => fetch('https://server-site-navy.vercel.app/categoryPaint')
        },
      ]
    },
  ]);