import { useGetStyles } from "../../api/queries/useGetStyles";
import { BaseSWRecordsResponse } from "../../api/responses/BaseSWRecordResponse";
import Card from "../_base/Card/Card";
import { Grid } from "@mui/material";
import * as Styled from "./ActivityTab.styled";
import EditIcon from "@mui/icons-material/Edit";

const ActivityTab = ({ activities }: { activities: BaseSWRecordsResponse }) => {
    const { stylesData, isLoading } = useGetStyles();

    if (isLoading) return <></>;

    return (
        <>
            <h3>Activities</h3>
            {activities!.records.map((item) => (
                <Card key={item._id}>
                    <Styled.Container>
                        <img src="/swim_icon.png" alt="logo" />
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={3}>
                                <p>datum:</p>
                                <p>{item.date}</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <p>uplavané metry:</p>
                                <p>{item.swumMeters}m</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <p>kalorie: </p>
                                <p>{item.calories}kJ</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3}>
                                <p>styl: </p>
                                <p>
                                    {
                                        stylesData!.styles.find(
                                            (style) =>
                                                style._id === item.styleId
                                        )?.name
                                    }
                                </p>
                            </Grid>
                        </Grid>
                        <EditIcon />
                    </Styled.Container>
                </Card>
            ))}
        </>
    );
};

export default ActivityTab;
