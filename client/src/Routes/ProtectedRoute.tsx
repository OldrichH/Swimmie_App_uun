import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
    const { isAuth } = useAuth();
    console.log(isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
