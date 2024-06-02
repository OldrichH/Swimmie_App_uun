import { apiInstance } from "../../main";
import { BaseStylesResponse } from "../responses/BaseStylesResponse";


/**
 * Request for getting all styles
 */
export const getStylesRequest = async () => {
    const { data } = await apiInstance.get<BaseStylesResponse>(`/swimming-style/list`);
    return data;
};