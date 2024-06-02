import { apiInstance } from "../../main";
import { BaseUserResponse } from "../responses/BaseUserResponse";


/**
 * Request for getting user information
 */
export const getUserRequest = async (id: string) => {
    const { data } = await apiInstance.get<BaseUserResponse>(`/user/get/?id=${id}`);
    return data;
};