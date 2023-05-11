import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";
const ErrorPage = () => {
  return (
    <div className="error">
      <h2>Error - Nothing to See Here !</h2>
      <Link className="link" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
