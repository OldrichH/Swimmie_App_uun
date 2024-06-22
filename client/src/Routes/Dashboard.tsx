import { CircularProgress, Grid } from "@mui/material";
import ActivityTab from "../components/ActivityTab/ActivityTab";
import UserProgress from "../components/UserProgress/UserProgress";
import { useGetUser } from "../api/queries/useGetUser";
import { useGetSWRecordsByUserId } from "../api/queries/useGetSWRecordsByUserId";

const Dashboard = () => {
    const { userData, isLoading } = useGetUser("665c7b3c047746f79db84dd8"); // Getting only Demo user - authentication not implemented
    const { swRecordData, isLoading: swRecordsLoading } =
        useGetSWRecordsByUserId(userData?._id);

    if (isLoading || swRecordsLoading) return <CircularProgress />;

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={4}>
                    <UserProgress
                        swRecordData={swRecordData!}
                        userLimit={userData!.personalLimit}
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <ActivityTab activities={swRecordData!} />
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
