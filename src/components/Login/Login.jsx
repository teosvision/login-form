import React, { useState } from "react";
import "./Login.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(emailRef.current.value)) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", emailRef.current.value);
      navigate("/profile");
    } else {
      navigate("/");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="form">
        <h2>Login to Your Account</h2>
        {show === false ? (
          ""
        ) : (
          <p className="error">
            Oops, there was an issue signing in:
            <br /> That doesn't look like a valid email!
          </p>
        )}
        <div className="email">
          <input ref={emailRef} name="email" placeholder="Email" type="email" />
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
