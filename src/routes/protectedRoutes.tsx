import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log("isAuthenticated", isAuthenticated);

  return (
    <>
      {isAuthenticated === false ? (
        <Navigate to="/login" />
      ) : isAdmin ? (
        user.role !== "admin" ? (
          <Navigate to="/login" />
        ) : (
          children
        )
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
