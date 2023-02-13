import { createBrowserRouter } from "react-router-dom";
import Main from "../../Leyout/Main/Main";
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
    ],
  },
]);

export default router;
