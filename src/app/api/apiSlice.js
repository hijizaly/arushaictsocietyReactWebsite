import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import authTokenStoreFun from "../../features/auth/authToken";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
    // credentials: 'include',
    // mode:"cors",
    prepareHeaders: (headers, {getState}) => {
        // console.log(getState().auth);
        const token=authTokenStoreFun.tokenGet();
            if(token){
                headers.set('Access-Control-Allow-Origin', '*')
                headers.set("authorization",token);
                headers.set("Accept", "application/json");
            }
            return headers;
    }
})


export const apiSlice = createApi({
    // baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/api/v1/"}),
    baseQuery,
    tagTypes: ['Member', 'Skill'],
    endpoints: build => ({})
});