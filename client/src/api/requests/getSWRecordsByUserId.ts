import { apiInstance } from "../../main";
import { BaseSWRecordsResponse } from "../responses/BaseSWRecordResponse";

/**
 * Request for getting swiming records information
 */
export const getSWRecordsByUserIdRequest = async (userId: string) => {
    const { data } = await apiInstance.get<BaseSWRecordsResponse>(`/swimming-record/getByUserId/?userId=${userId}`);
    return data;
};