import * as Styled from "./UserProgress.styled";
import Card from "../_base/Card/Card";
import ProgressBar from "../_base/ProgressBar/ProgressBar";
import { Grid } from "@mui/material";
import { calculatePercentage, getRecordStatistics } from "../../utils";
import { BaseSWRecordsResponse } from "../../api/responses/BaseSWRecordResponse";

interface Props {
    swRecordData: BaseSWRecordsResponse;
    userLimit: string;
}

const UserProgress = ({ swRecordData, userLimit }: Props) => {
    const stats = getRecordStatistics(swRecordData!);

    const calculatedPercentage = calculatePercentage(
        getRecordStatistics(swRecordData!).totalCalories.toString(),
        userLimit
    );
    return (
        <>
            <h3>Progress</h3>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={12} md={6}>
                        <ProgressBar
                            progressValue={calculatedPercentage}
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
                                <Styled.Value>
                                    {stats.totalSwumMeters}m
                                </Styled.Value>
                            </Styled.Container>
                            <Styled.Container>
                                <Styled.Key>Spálené kalorie:</Styled.Key>
                                <Styled.Value>
                                    {stats.totalCalories}kJ
                                </Styled.Value>
                            </Styled.Container>
                            <Styled.Container>
                                <Styled.Key>Nejoblíbenější styl:</Styled.Key>
                                <Styled.Value>kraul</Styled.Value>
                            </Styled.Container>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default UserProgress;
