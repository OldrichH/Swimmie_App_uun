import { Grid } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";
import ActivityTab from "../ActivityTab/ActivityTab";


const Activities = () => {
    console.log("neco se deje");
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={4}>
                    <ProgressBar 
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
