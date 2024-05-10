import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./utils/routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ConfigureAppStore } from "./redux/store";
const store = ConfigureAppStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes}></RouterProvider>
  </Provider>
);
