import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Layout from "./components/RootLayout/Layout";
import Login from "./components/Forms/LoginForm/LoginForm";
import Dashboard from "./Routes/Dashboard";

const Router = () => {
    return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <Layout />,
                children: [{ path: "/dashboard", element: <Dashboard /> }],
            },
        ],
    },
]);

export default Router;
