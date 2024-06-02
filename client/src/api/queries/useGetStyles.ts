import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../query";
import { getStylesRequest } from "../requests/getStyles";

export const useGetStyles = () => {
    const { data, ...props } = useQuery({
        queryKey: queryKeys.STYLES(),
        queryFn: () => getStylesRequest(),
    });

    return { stylesData: data, ...props };
};
