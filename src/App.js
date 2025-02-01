import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

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
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Swiggy />);
