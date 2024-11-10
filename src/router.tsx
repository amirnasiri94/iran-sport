import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import PanelPage from "@/pages/PanelPage";
import ProductsPage from "@/pages/ProductsPage";
import ProductPage from "@/pages/ProductPage";

interface RouteObject {
  path: string;
  element: React.ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/blog",
    element: <LoginPage />,
  },
  {
    path: "/panel",
    element: <PanelPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
] as RouteObject[]);

export default router;
