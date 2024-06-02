import { Grid } from "@mui/material";
import ActivityTab from "../ActivityTab/ActivityTab";
import UserProgress from "../UserProgress/UserProgress";


const Activities = () => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={4}>
                    <UserProgress 
                        progressValue={70}
                        swumMeters={1425}
                        calories={1450}
                        favouriteStyle="kraul"
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <ActivityTab/>
                </Grid>
            </Grid>
        </>
    );
};

export default Activities;
