import { styled } from "@mui/material";

export const CenteredContainer = styled("div")(({color} : {color: string}) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    ".MuiCircularProgress-circle": {
        color: `${color || "white"}`,
    }
}));

export const Paragraph = styled("h2")(({color} : {color: string}) => ({
    margin: "1rem 0",
    color: `${color || "white"}`,
    fontSize: "1.4rem",
    fontWeight: "0.5",
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
}))