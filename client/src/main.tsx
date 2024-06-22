import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createApiInstance } from "./api/client.ts";
import store, { persistor } from "./store/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const apiInstance = createApiInstance();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Toaster />
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
