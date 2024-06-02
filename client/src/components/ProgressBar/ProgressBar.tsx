import { CircularProgress, Grid } from "@mui/material";
import * as Styled from "./ProgressBar.styled";
import { useEffect, useState } from "react";
import Card from "../_base/Card";

interface Props {
    progressValue: number;
    swumMeters: number;
    calories: number;
    favouriteStyle: string;
}

const ProgressBar = ({progressValue, swumMeters, calories, favouriteStyle}: Props) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => (prev < progressValue ? prev + 5 : progressValue));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, [progressValue]);

    return (
        <>
            <h3>Progress</h3>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={12} md={6}>
                        <Styled.CenteredContainer>
                            <CircularProgress
                                variant="determinate"
                                value={progress}
                                size={120}
                                thickness={8}
                                style={{ color: "var(--high-contrast)" }}
                            />
                            <p style={{color:"var(--high-contrast)"}}>{progressValue}%</p>
                        </Styled.CenteredContainer>
                    </Grid>
                    <Grid item xs={6} sm={12} md={6}>
                        <div>
                            <Styled.Container>
                                <Styled.Key>Uplavané metry:</Styled.Key>
                                <Styled.Value>{swumMeters}m</Styled.Value>
                            </Styled.Container>
                            <Styled.Container>
                                <Styled.Key>Spálené kalorie:</Styled.Key>
                                <Styled.Value>{calories} kJ</Styled.Value>
                            </Styled.Container>
                            <Styled.Container>
                                <Styled.Key>Nejoblíbenější styl:</Styled.Key>
                                <Styled.Value>{favouriteStyle}</Styled.Value>
                            </Styled.Container>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default ProgressBar;