import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PropertiesDetails from "../Pages/PropertiesDetails/PropertiesDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
import UpdateUser from "../Pages/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/propertiesDetails/:id",
        element: (
          <PrivateRoute>
            <PropertiesDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        )
      },
      {
        path: "/updateUser",
        element: <UpdateUser />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
