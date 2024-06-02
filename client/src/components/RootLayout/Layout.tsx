import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../Header/Header";


const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">{children}</Container>
        </>
    );
};

export default Layout;
