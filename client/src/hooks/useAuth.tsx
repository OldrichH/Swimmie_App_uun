import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectIdentity, useAppDispatch, useAppSelector } from "../store/store";
import { removeUserIdentity, setUserIdentity } from "../store/slices/identitySlice";
import { BaseUserResponse } from "../api/responses/BaseUserResponse";

export const useAuth = () => {
    const navigate = useNavigate();
    const appDispatch = useAppDispatch();
    const identity = useAppSelector(selectIdentity);

    const isAuth = identity.isAuthenticated ? true : false;

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else {
            navigate("/dashboard");
        }
    }, [isAuth, navigate]);

    const login = (userData: BaseUserResponse) => {
        appDispatch(setUserIdentity({value: userData}))
        navigate("/dashboard");
    }

    const logout = () => {
        appDispatch(removeUserIdentity())
        navigate("/login");
    }

    const userInfo = () => {
        return identity.user;
    }

    return { isAuth, userInfo, login, logout };
};
