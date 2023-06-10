import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />;
    // you can also use useNavigate hook to get a function and pass the path to navigate
  }
  return children;
};

export default ProtectedRoute;
