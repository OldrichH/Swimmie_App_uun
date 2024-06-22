
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query";
import { getSWRecordsByUserIdRequest } from "../requests/getSWRecordsByUserId";

export const useGetSWRecordsByUserId = (userId: string | undefined) => {
    const { data, ...props } = useQuery({
        queryKey: queryKeys.SW_RECORDS(userId!),
        queryFn: () => getSWRecordsByUserIdRequest(userId!),
        enabled: !!userId
    });

    return { swRecordData: data, ...props };
};
