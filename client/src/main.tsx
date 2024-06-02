import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Toaster />
        <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
