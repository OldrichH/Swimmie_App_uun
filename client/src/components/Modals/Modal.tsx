import { Box, IconButton, Modal, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import SWRecordForm from "../Forms/SWRecordForm/SWRecordForm";
import AddIcon from "@mui/icons-material/Add";
import { BaseSWRecordResponse } from "../../api/responses/BaseSWRecordResponse";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: `black`,
    textAlign: "center",
};

interface Props {
    recordData: BaseSWRecordResponse | undefined;
    edit: boolean;
}

const SWRecordModal = ({ edit, recordData }: Props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {edit ? (
                <IconButton
                    aria-label="edit"
                    style={{ color: "white" }}
                    onClick={() => handleOpen()}
                >
                    <EditIcon />
                </IconButton>
            ) : (
                <IconButton
                    aria-label="add"
                    style={{ color: "white" }}
                    onClick={() => handleOpen()}
                >
                    <AddIcon />
                </IconButton>
            )}

            <Modal
                aria-labelledby="sw record modal"
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        {!edit
                            ? "Add new swimming record"
                            : "Update swimming record"}
                    </Typography>
                    <br />

                    <SWRecordForm
                        close={handleClose}
                        recordData={edit ? recordData : undefined}
                        edit={edit}
                    />
                </Box>
            </Modal>
        </div>
    );
};

export default SWRecordModal;
