import axios, { AxiosError } from "axios";
import * as _ from "lodash";
import { dispatchErrorEvent } from "../events/errorEvent";

/**
 *  Inicializace API
 * @param contentType {string}
 */
export const createApiInstance = (contentType = "application/json; charset=utf-8") => {
    const api = axios.create({
        baseURL: `http://localhost:8000/`,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": contentType,
        },
    });
    api.interceptors.request.use(
        async (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (res) => res,
        (err: AxiosError) => {
            const error = err.response?.data as any;

            if (_.isArray(error)) {
                _.forEach(error, (single) => {
                    dispatchErrorEvent(single.message);
                });
            } else {
                dispatchErrorEvent(error?.message || error?.Message || err.message);
            }

            return Promise.reject(err);
        }
    );

    return api;
};
