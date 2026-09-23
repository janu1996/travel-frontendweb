import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  if (!user) {
    alert("Please login to access this page");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;