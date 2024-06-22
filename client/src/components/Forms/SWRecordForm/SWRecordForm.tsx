import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    TextField,
    Button,
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { BaseSWRecordResponse } from "../../../api/responses/BaseSWRecordResponse";
import { useCreateSWRecord } from "../../../api/mutations/useCreateSWRecord";
import { useAuth } from "../../../hooks/useAuth";
import { useUpdateSWRecord } from "../../../api/mutations/useUpdateSWRecord";

const swimmingStyles = [
    { id: "6637e3ef3449b838c7e34eba", name: "Kraul" },
    { id: "6637f1d2f20951152a535c83", name: "Prsa" },
];

const schema = yup.object().shape({
    swumMeters: yup
        .number()
        .required("Swum Meters is required")
        .positive("Swum Meters must be positive"),
    calories: yup
        .number()
        .required("Calories is required")
        .positive("Calories must be positive"),
    swimmingTime: yup.string().required("Swimming Time is required"),
    styleId: yup.string().required("Style ID is required"),
    date: yup.string().required("Date is required"),
});
export interface SWRecord {
    swumMeters: number;
    calories: number;
    swimmingTime: string;
    styleId: string;
    date: string;
}
interface Props {
    recordData: BaseSWRecordResponse | undefined;
    edit: boolean;
    close: () => void;
}

const SWRecordForm = ({ recordData, edit, close }: Props) => {
    const createSWRecordMutation = useCreateSWRecord();
    const updateSWRecordMutation = useUpdateSWRecord();

    const { userInfo } = useAuth();

    const initialValues: SWRecord = !recordData
        ? {
              swumMeters: 0,
              calories: 0,
              swimmingTime: "",
              styleId: "",
              date: "",
          }
        : {
              swumMeters: recordData.swumMeters,
              calories: recordData.calories,
              swimmingTime: recordData.swimmingTime,
              styleId: recordData.styleId,
              date: recordData.date,
          };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SWRecord>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        values: initialValues,
    });

    const onSubmit = async (data: SWRecord) => {
        console.log("Form data submitted:", data);
        console.log(edit);
        edit
            ? updateSWRecordMutation.mutateAsync({
                  ...data,
                  id: recordData!._id,
              })
            : createSWRecordMutation.mutateAsync({
                  ...data,
                  userId: userInfo()._id,
              });
        close();
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "20rem" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
        >
            <Controller
                name="swumMeters"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Swum Meters"
                        type="number"
                        error={!!errors.swumMeters}
                        helperText={errors.swumMeters?.message}
                        required
                    />
                )}
            />
            <Controller
                name="calories"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Calories / kJ"
                        type="number"
                        error={!!errors.calories}
                        helperText={errors.calories?.message}
                        required
                    />
                )}
            />
            <Controller
                name="swimmingTime"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Swimming Time"
                        type="time"
                        error={!!errors.swimmingTime}
                        helperText={errors.swimmingTime?.message}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />
            <FormControl style={{ width: "100%", textAlign: "left" }}>
                <InputLabel id="demo-simple-select-standard-label">
                    Style
                </InputLabel>
                <Controller
                    name="styleId"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            label="Style"
                            // variant="standard"
                            labelId="demo-simple-select-standard-label"
                        >
                            {swimmingStyles.map((style) => (
                                <MenuItem key={style.id} value={style.id}>
                                    {style.name}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
            </FormControl>

            <Controller
                name="date"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Date"
                        type="date"
                        error={!!errors.date}
                        helperText={errors.date?.message}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default SWRecordForm;
