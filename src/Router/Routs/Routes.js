import { createBrowserRouter } from "react-router-dom";
import Main from "../../Leyout/Main/Main";
import Login from "../../Leyout/shared/Login/Login";
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
    ],
  },
]);

export default router;
