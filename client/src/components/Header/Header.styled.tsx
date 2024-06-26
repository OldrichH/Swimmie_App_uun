import { styled } from "@mui/material";

export const HeaderElement = styled("header")({
    backgroundColor: "var(--secondary-color)",
    color: "#001932",
    padding: "5px 3rem",
    width: "100%",
    marginBottom: "1rem",
    opacity: "80%",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    height: "5rem",
    boxSizing: "border-box",
    "& img": {
        height: "30px",
        border: "1px solid #001932",
        borderRadius: "50%",
        padding:"2px",
    },
    "& h1": {
        margin: "0",
    }
})

export const Logo = styled("div")({
    flex: "1",
    width: "100%",
    display: "flex",
    gap: "1rem",
})
