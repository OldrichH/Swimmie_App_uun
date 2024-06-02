import { styled } from "@mui/material";

export const Container = styled("div")({
    margin: "0 0 1rem 0",
});
export const Key = styled("p")({
    textTransform: "uppercase",
    fontSize: "0.8rem",
    margin: "0",
});
export const Value = styled("h3")({
    fontSize: "1.5rem",
    color: "var(--high-contrast)",
    padding: "0",
    margin: "0.5rem 0 0 0",
});

export const FixedValue = styled("div")({
    position: "fixed",
    top: "50%",
    left: "50%",
    display: "inline",

})
