import { apiInstance } from "../../main";


/**
 * Request for deleting SW Record
 */
export const deleteSWRecordRequest = async (swRecordId: string) => {
    const { data } = await apiInstance.post(`/swimming-record/delete/`, {id: swRecordId});
    return data;
};