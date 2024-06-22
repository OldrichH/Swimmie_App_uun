import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../query";
import { deleteSWRecordRequest } from "../requests/deleteSWRecord";

export const useDeleteSWRecord = () => {
    return useMutation({
        mutationFn: (id: string) => {
            return deleteSWRecordRequest(id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["SWRecord"] });
        },
    });
};
