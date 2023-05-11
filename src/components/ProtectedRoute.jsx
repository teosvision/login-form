import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const email = localStorage.getItem("email");
  if (!isLoggedIn || !email) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
