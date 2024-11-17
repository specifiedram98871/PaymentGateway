import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log("isAuthenticated", isAuthenticated);
  
  if (isAuthenticated) {
    localStorage.setItem("isAuthenticated", "true");
  } else {
    localStorage.removeItem("isAuthenticated");
  }

  return <>{isAuthenticated ? <> {children}</> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
