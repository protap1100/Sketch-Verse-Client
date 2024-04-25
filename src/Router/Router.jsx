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
          path:'/contact',
          element : <ContactUs></ContactUs>
        },
        {
          path: '/addPaint',
          element : <AddPaint></AddPaint>
        },
        {
          path: '/allPaint',
          element : <AllPaint></AllPaint>
        },
        {
          path: '/myPaint',
          element : <MyPaint></MyPaint>
        }
      ]
    },
  ]);