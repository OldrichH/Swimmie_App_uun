import { styled } from "@mui/material";

export const CenteredContainer = styled("div")({
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& p": {
        margin: "1rem 0"
    }
});

export const Container = styled("div")({
    margin: "0 0 1rem 0",
});
export const Key = styled("p")({
    textTransform: "uppercase",
    fontSize: "0.7rem",
    margin: "0",
});
export const Value = styled("p")({
    fontSize: "1.3rem",
    color: "var(--high-contrast)",
    padding: "0",
    margin: "0",
});

export const FixedValue = styled("div")({
    position: "fixed",
    top: "50%",
    left: "50%",
    display: "inline",

})
