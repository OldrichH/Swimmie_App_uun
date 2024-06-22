import { createSlice } from "@reduxjs/toolkit";
import { BaseUserResponse } from "../../api/responses/BaseUserResponse";

interface Identity {
    isAuthenticated: boolean;
    user: BaseUserResponse;
}
const initialState: Identity = {
    isAuthenticated: false,
    user: { _id: "", name: "", surname: "", email: "", personalLimit: "" },
};

const identitySlice = createSlice({
    name: "userIdentity",
    initialState,
    reducers: {
        setUserIdentity: (
            state,
            action: { payload: { value: BaseUserResponse } }
        ) => {
            state.user = action.payload.value;
            state.isAuthenticated = true;
        },
        removeUserIdentity: () => {
            return initialState;
        },
    },
});

export const {setUserIdentity, removeUserIdentity} = identitySlice.actions;
export default identitySlice;
