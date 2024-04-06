import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";

function ProtectedRoute({ children }) {
  const { isLoading, authenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated && !isLoading) navigate("/login");
  }, [authenticated, navigate, isLoading]);

  if (authenticated) return children;
}

export default ProtectedRoute;
