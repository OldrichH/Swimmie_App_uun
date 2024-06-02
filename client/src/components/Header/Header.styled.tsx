import { styled } from "@mui/material";

export const HeaderElement = styled("header")({
    backgroundColor: "var(--secondary-color)",
    color: "#001932",
    padding: "5px 1rem",
    width: "100%",
    marginBottom: "1rem",
    opacity: "80%",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    height: "50px",
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
