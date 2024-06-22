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

export const Label = styled("p")({
    textTransform: "uppercase",
    fontSize: "0.7rem",
    margin: "0",
})

export const Value = styled("p")({
    textTransform: "uppercase",
    fontSize: "1.4rem",
    margin: "4px",
    color: "var(--secondary-color)",
})

export const Heading = styled("h3")({
    display: "block",
    marginRight: "2rem"
})
