import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/styles/main.css";
import Customer from "./pages/customer";
import Dashboard from "./pages/dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Page404 from "./pages/404";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
      ],
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
