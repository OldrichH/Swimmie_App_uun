import { Container } from "@mui/material";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </Fragment>
    );
};

export default Layout;
