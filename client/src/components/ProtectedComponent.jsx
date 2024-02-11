/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

export default function ProtectedComponent({ children }) {
  let user = useSelector((store) => store.user.value?.name.isAdmin);

  if (user) {
    return <>{children}</>;
  }
  return null;
}
