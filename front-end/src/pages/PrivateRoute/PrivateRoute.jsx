import { Navigate } from "react-router-dom";

const hasToken = () => {
  const token = localStorage.getItem("user_token");

  if (!token) return false;

  return true;
};

const PrivateRoute = ({ children }) => {
  const user = hasToken();

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
