import * as Styled from "./UserProgress.styled";
import Card from "../_base/Card/Card";
import ProgressBar from "../_base/ProgressBar/ProgressBar";
import { Grid } from "@mui/material";

interface Props {
    progressValue: number;
    swumMeters: number;
    calories: number;
    favouriteStyle: string;
}

const UserProgress = ({
    progressValue,
    swumMeters,
    calories,
    favouriteStyle,
}: Props) => {
    return (
        <>
            <h3>Progress</h3>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={12} md={6}>

                        <ProgressBar
                            progressValue={progressValue}
                            variant="determinate"
                            size={120}
                            thickness={8}
                            progressColor="var(--high-contrast)"
                        />
                    </Grid>
                    <Grid item xs={6} sm={12} md={6}>
                        <div>
                            <Styled.Container>
                                <Styled.Key>Uplavané metry:</Styled.Key>
                                <Styled.Value>{swumMeters}m</Styled.Value>
                            </Styled.Container>
                            <Styled.Container>
                                <Styled.Key>Spálené kalorie:</Styled.Key>
                                <Styled.Value>{calories}kJ</Styled.Value>
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

export default UserProgress;
