import { BaseSWRecordsResponse } from "../../api/responses/BaseSWRecordResponse";
import Card from "../_base/Card/Card";
import { Grid } from "@mui/material";

const ActivityTab = ({ activities }: { activities: BaseSWRecordsResponse }) => {
    return (
        <>
            <h3>Activities</h3>
            {activities!.records.map((item) => (
                <Card>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={3}>
                            <p>datum: {item.date}</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <p>uplavané metry: {item.swumMeters}m</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <p>kalorie: {item.calories}kJ</p>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </>
    );
};

export default ActivityTab;
