import { createBrowserRouter } from "react-router-dom";
import Main from "../../Leyout/Main/Main";
import CheckOut from "../../Leyout/shared/checOut/CheckOut";
import Login from "../../Leyout/shared/Login/Login";
import Signup from "../../Leyout/shared/signup/Signup";
import Home from "./Homes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
