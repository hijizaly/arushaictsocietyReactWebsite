import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import authTokenStoreFun from "../../features/auth/authToken";

const baseQuery = fetchBaseQuery({
    // baseUrl: "https://api.arushaictsociety.or.tz/api/v1/",
    baseUrl: "http://localhost:8000/api/v1/",
    prepareHeaders: (headers, {getState}) => {
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
    baseQuery,
    tagTypes: ['Member', 'Skill'],
    endpoints: build => ({})
});