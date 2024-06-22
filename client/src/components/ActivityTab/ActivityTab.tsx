import { useGetStyles } from "../../api/queries/useGetStyles";
import { BaseSWRecordsResponse } from "../../api/responses/BaseSWRecordResponse";
import Card from "../_base/Card/Card";
import { Grid, IconButton } from "@mui/material";
import * as Styled from "./ActivityTab.styled";
import useMediaQueries from "../../hooks/useMediaQueries";
import { DeleteForever } from "@mui/icons-material";
import { useDeleteSWRecord } from "../../api/mutations/useDeleteSWRecord";
import SWRecordModal from "../Modals/Modal";

const ActivityTab = ({ activities }: { activities: BaseSWRecordsResponse }) => {
    const { stylesData } = useGetStyles();
    const { xs } = useMediaQueries();
    const deleteSWRecordMutation = useDeleteSWRecord();

    const sortedActivities = activities.records.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const handleDelete = (recordId: string) => {
        deleteSWRecordMutation.mutateAsync(recordId);
    };

    return (
        <>
            <Styled.Container>
                <Styled.Heading>Activities</Styled.Heading>
                <SWRecordModal edit={false} recordData={undefined} />
            </Styled.Container>

            {sortedActivities.map((item) => (
                <Card key={item._id}>
                    <Styled.Container>
                        {!xs && <img src="/swim_icon.png" alt="logo" />}

                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={2}>
                                {/* <Styled.Label>datum:</Styled.Label>
                                <Styled.Value>{item.date}</Styled.Value> */}
                                <p>{item.date}</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <Styled.Label>vzdálenost:</Styled.Label>
                                <Styled.Value>{item.swumMeters}m</Styled.Value>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <Styled.Label>kalorie: </Styled.Label>
                                <Styled.Value>{item.calories}kJ</Styled.Value>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <Styled.Label>Čas: </Styled.Label>
                                <Styled.Value>{item.swimmingTime}</Styled.Value>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2}>
                                <Styled.Label>styl: </Styled.Label>
                                <Styled.Value>
                                    {
                                        stylesData?.styles.find(
                                            (style) =>
                                                style._id === item.styleId
                                        )?.name
                                    }
                                </Styled.Value>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} style={{display: "flex", alignItems: "center"}}>
                                <SWRecordModal edit={true} recordData={item} />
                                <IconButton
                                    aria-label="delete"
                                    style={{ color: "white" }}
                                    onClick={() => handleDelete(item._id)}
                                >
                                    <DeleteForever />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Styled.Container>
                </Card>
            ))}
        </>
    );
};

export default ActivityTab;
