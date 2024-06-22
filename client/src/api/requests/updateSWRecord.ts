import { apiInstance } from "../../main";
import { UpdateSWRecordData } from "../responses/SWRecordData";

/**
 * Request for updating SW Record
 */
export const updateSWRecord = async (SWRecordData: UpdateSWRecordData) => {
    const { data } = await apiInstance.post(`/swimming-record/update`, {
        ...SWRecordData,
    });
    return data;
};
