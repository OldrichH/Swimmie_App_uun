import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Layout from "./components/RootLayout/Layout";
import Dashboard from "./Routes/Dashboard";
import Login from "./Routes/Login";

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
