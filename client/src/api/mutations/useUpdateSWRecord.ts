import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../query";
import { UpdateSWRecordData } from "../responses/SWRecordData";
import { updateSWRecord } from "../requests/updateSWRecord";

export const useUpdateSWRecord = () => {
    return useMutation({
        mutationFn: (recordData: UpdateSWRecordData) => {
            return updateSWRecord(recordData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["SWRecord"] });
        },
    });
};
