import { globalEvents } from "./events";

interface CustomEventProps {
    message: string;
}

/**
 * Event pro error
 */
const errorEvent = (message: string) =>
    new CustomEvent(globalEvents.error, {
        bubbles: true,
        detail: { message },
    });

/**
 * Spuštění error eventu
 */
export const dispatchErrorEvent = (message: string) => {
    document.dispatchEvent(errorEvent(message));
};

/**
 * Naslouchání pro spuštění error eventu
 */
export const listenToErrorEvent = (cb: (e: CustomEvent<CustomEventProps>) => void) => {
    document.addEventListener(globalEvents.error, cb as any);
};

/**
 * Odstranění error listeneru
 * @param cb
 */
export const removeErrorEventListener = (cb: (e: CustomEvent<CustomEventProps>) => void) => {
    document.removeEventListener(globalEvents.error, cb as any);
};
