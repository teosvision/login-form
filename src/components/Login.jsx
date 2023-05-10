import React, { useState } from "react";
import "./Login.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(emailRef.current.value)) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", emailRef.current.value);
      setError("");
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  // Eamil validation
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-div">
        <h2>Login to Your Account</h2>
        <div className="email">
          <input
            required
            ref={emailRef}
            name="email"
            placeholder="Email"
            type="email"
          />
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
