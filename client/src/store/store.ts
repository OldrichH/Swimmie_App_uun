import { configureStore } from "@reduxjs/toolkit";
import identitySlice from "./slices/identitySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const persistedConfig = {
    key: "userIdentity",
    storage,
};

const store = configureStore({
    reducer: {
        identity: persistReducer(persistedConfig, identitySlice.reducer), //identitySlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const selectIdentity = (state: AppState) => state.identity;

export default store;
