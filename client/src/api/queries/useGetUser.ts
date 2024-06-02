
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query";
import { getUserRequest } from "../requests/getUser";

export const useGetUser = (id: string) => {
    
    const { data, ...props } = useQuery({
        queryKey: queryKeys.USER(id),
        queryFn: () => getUserRequest(id),
    });

    return { userData: data, ...props };
};
