import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import Accounts from "@/pages/Accounts";
import Analytics from "@/pages/Analytics";
import Categories from "@/pages/Categories";
import Login from "@/pages/Login";
import Overview from "@/pages/Overview";
import Settings from "@/pages/Settings";
import Transactions from "@/pages/Transactions";

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
        handle: {
          title: "Overview",
        },
      },
      {
        path: "/transactions",
        element: <Transactions />,
        handle: {
          title: "Transactions",
        },
      },
      {
        path: "/accounts",
        element: <Accounts />,
        handle: {
          title: "Accounts",
        },
      },
      {
        path: "/categories",
        element: <Categories />,
        handle: {
          title: "Categories",
        },
      },
      {
        path: "/analytics",
        element: <Analytics />,
        handle: {
          title: "Analytics",
        },
      },
      {
        path: "/settings",
        element: <Settings />,
        handle: {
          title: "Settings",
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
