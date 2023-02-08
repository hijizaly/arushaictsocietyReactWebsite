import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./api/apiSlice"
import {membersApi} from "../features/users/usersApiSlice2";
import authReducer from "../features/auth/authSlice"
import {setupListeners} from "@reduxjs/toolkit/query";
// import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth:authReducer,

    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
});
setupListeners(store.dispatch);
