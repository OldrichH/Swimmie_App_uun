import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { useEffect } from "react";

export const useAuth = () => {
    const navigate = useNavigate();

    const isAuth = isAuthenticated() ? true : false;

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else {
            navigate("/dashboard");
        }
    }, [isAuth, navigate]);

    return { isAuth };
};