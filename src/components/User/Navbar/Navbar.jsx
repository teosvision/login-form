import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
const Navbar = ({ name }) => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.setItem("isLoggedIn", "");
    localStorage.setItem("email", "");
    navigate("/");
  };
  return (
    <div className="navbar">
      <h2>Welcome back, {name}</h2>
      <button type="button" onClick={Logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
