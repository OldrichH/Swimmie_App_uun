import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../query";
import { SWRecordData } from "../responses/SWRecordData";
import { createSWRecord } from "../requests/createSWRecord";

export const useCreateSWRecord = () => {
    return useMutation({
        mutationFn: (recordData: SWRecordData) => {
            return createSWRecord(recordData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["SWRecord"] });
        },
    });
};
