import { globalEvents } from "./events";

interface CustomEventProps {
    error: string;
}

export interface ErrorResponse {
    Detail: null;
    Message: string;
    MessageObject: {
        Category: number;
        Data: object;
        Key: string;
        Template: string;
        Value: string;
    };
    StatusCode: number;
}

/**
 * Event pro query error
 * @param error
 */
const queryErrorEvent = (error: string) =>
    new CustomEvent(globalEvents.queryError, {
        bubbles: true,
        detail: { error },
    });

/**
 * Spuštění query error eventu
 * @param error
 */
export const dispatchQueryErrorEvent = (error: string) => {
    document.dispatchEvent(queryErrorEvent(error));
};

/**
 * Naslouchání pro spuštění query error eventu
 * @param cb
 */
export const listenToQueryErrorEvent = (cb: (e: CustomEvent<CustomEventProps>) => void) => {
    document.addEventListener(globalEvents.queryError, cb as any);
};
