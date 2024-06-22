import { apiInstance } from "../../main";
import { SWRecordData } from "../responses/SWRecordData";


/**
 * Request for creating SW Record
 */
export const createSWRecord = async (SWRecordData: SWRecordData) => {
    const { data } = await apiInstance.post(`/swimming-record/create`, {...SWRecordData});
    return data;
};