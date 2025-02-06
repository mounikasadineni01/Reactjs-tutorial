import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorPath from "./components/ErrorPath";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/Menu";

/**
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search bar
 *   - Search button
 *   - Restaurent container
 *     - Cards
 * Footer
 *   - Copyrights
 *   - Contact
 *   - Links
 *   - Address
 */

const Swiggy = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Swiggy />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Menu/:resID",
        element: <Menu />,
      },
    ],
    errorElement: <ErrorPath />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
