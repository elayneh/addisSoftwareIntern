import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../frontendApplication/Components/notFound";
import { allRoutes } from "./routes";
import Home from "../../frontendApplication";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: allRoutes.map(({ path, element }) => ({
      path: path,
      element: element,
    })),
    errorElement: <NotFound />,
  },
]);
