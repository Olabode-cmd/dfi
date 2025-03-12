import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <FaSpinner className="text-red-500 animate-spin w-8 h-8" />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
