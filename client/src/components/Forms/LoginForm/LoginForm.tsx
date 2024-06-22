import { Button, CircularProgress, Grid } from "@mui/material";
import { useGetUser } from "../../../api/queries/useGetUser";
import { useAuth } from "../../../hooks/useAuth";
import * as Styled from "./LoginForm.styled";

const LoginForm = () => {
    const { login } = useAuth();
    const { userData, isLoading } = useGetUser("665c7b3c047746f79db84dd8");

    if (isLoading) return <CircularProgress />;

    const handleLogin = () => {
        login(userData!);
    };

    return (
        <Styled.Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>This is demo login form</h1>
                </Grid>
                <Grid item xs={12}>
                    <Styled.InputField
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Styled.InputField
                        id="outlined-basic"
                        label="password"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleLogin}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Styled.Container>
    );
};

export default LoginForm;
