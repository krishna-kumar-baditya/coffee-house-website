import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Redux/authSlice";
import { crudSlice } from "../Redux/crudSlice";
export const Store = configureStore({
    reducer  : {
        authKey : authSlice.reducer,
        crudKey : crudSlice.reducer,
    }
})