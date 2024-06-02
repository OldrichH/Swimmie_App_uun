import Card from "../_base/Card";
import  {Grid } from "@mui/material";

const ActivityTab = () => {
    return (
        <>
            <h3>Activities</h3>
            <Card>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}><p>aktivita</p></Grid>
                </Grid>
            </Card>
        </>
    );
};

export default ActivityTab;
