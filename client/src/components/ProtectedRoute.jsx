import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  let user = useSelector((store) => store.user.value?.name);
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}
