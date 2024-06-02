import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
        },
    },
});

export const queryKeys = {
    USER: (userId: string ) => ["user", userId],
    SW_RECORDS: (userId: string) => ["SWRecord", userId],
    STYLES: () => ["Styles"],
};