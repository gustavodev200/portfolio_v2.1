import { Route } from "react-router-dom";
import { Home } from "../../pages";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Home />,
  },
].map((props) => <Route {...props} />);

export const privateRoutes = [
  {
    path: "/admin",
    element: <Home />,
  },
].map((props) => <Route {...props} />);
