import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRooute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRooute;
