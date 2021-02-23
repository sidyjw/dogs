import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { RouteProps } from "react-router";
import { UserContext } from "state/UserContext";

function ProtectedRoute(props: RouteProps) {
  const context = useContext(UserContext);

  switch (context?.login) {
    case true:
      return <Route {...props} />;
    case false:
      return <Navigate to="/login" />;
    default:
      return null;
  }
}

export default ProtectedRoute;
