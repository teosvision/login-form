import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/User/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
