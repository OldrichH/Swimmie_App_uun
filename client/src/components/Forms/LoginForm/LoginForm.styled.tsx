import { styled, TextField } from "@mui/material";

export const Container = styled("div")({
    margin: "0 auto",
    width: "25rem",
    textAlign: "center",
    // border: "1px solid #fff",
    backgroundColor: "var(--card-background)",
    color: "var(--secondary-color)",
    paddingBottom: "2rem",
})

export const InputField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "var(--secondary-color)",
        },
        "&:hover fieldset": {
            borderColor: "var(--secondary-color)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "var(--secondary-color)",
        },
    },
    "& .MuiInputLabel-root": {
        color: "var(--secondary-color)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "var(--secondary-color)",
    },
})