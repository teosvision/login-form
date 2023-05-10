import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  if (isLoggedIn === "false" || !isLoggedIn) {
    return navigate("/");
  } else {
    return children;
  }
};

export default ProtectedRoute;
