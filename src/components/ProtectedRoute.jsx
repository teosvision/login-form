import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  if (isLoggedIn == false || isLoggedIn == "") {
    <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
