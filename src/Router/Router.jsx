import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

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
        }
      ]
    },
  ]);