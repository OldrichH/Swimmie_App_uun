import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg"><Outlet/></Container>
        </>
    );
};

export default Layout;
