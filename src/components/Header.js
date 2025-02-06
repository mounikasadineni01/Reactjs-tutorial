import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
        <h1>Uber Eats</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
          onClick={() => {
            setbtnName(btnName === "Login" ? "Logout" : "Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
