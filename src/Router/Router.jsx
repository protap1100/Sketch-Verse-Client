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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement: <Error></Error>,
      children: [
        {
            index : true,
            element : <Home></Home>
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
          path: '/allPaint',
          element : <PrivateRoute><AllPaint></AllPaint></PrivateRoute>,
          loader : () => fetch('http://localhost:5000/allPaint')
        },
        {
          path: '/myPaint',
          element : <PrivateRoute><MyPaint></MyPaint></PrivateRoute>
        }
      ]
    },
  ]);