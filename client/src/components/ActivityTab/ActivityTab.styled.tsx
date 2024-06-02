import { styled } from "@mui/material";

export const Container = styled("div")({
    display: "flex",
    width: "100%",
    alignItems: "center",
    "& img": {
        width: "64px",
        marginRight: "1rem",
    },
    "& h3": {
        margin: "0"
    }
    
});