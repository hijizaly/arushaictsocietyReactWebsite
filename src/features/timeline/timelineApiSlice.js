import {createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const timelinesAdapter=createEntityAdapter({});
const initialState=timelinesAdapter.getInitialState();

export const timelinesApi=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        // timelinesDetails:builder.query({
        //     query:(id)=>({
        //         // url:"/timelines/${id}",
        //         url:"/timelines/2",
        //         method:"GET",
        //         // providesTags:["Timelines"]
        //     })
        // }),
        allTimelines:builder.query({
            query:() => "timeline",
            providesTags:["Timelines"]
        }),
        // addTimelines:builder.mutation({
        //     query:(timelines)=>({
        //         url:"memberregister",
        //         method:"POST",
        //         body: timelines,
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     }),
        //     invalidatesTags:['Timelines']
        // }),
        // updateTimelines:builder.mutation({
        //     query:({id,...rest})=>({
        //         url:"/${id}",
        //         method:"PATCH",
        //         body:rest
        //     })
        // }),
        // deleteTimelines:builder.mutation({
        //     query:(id)=>({
        //         url:"/timelines/${id}",
        //         method:"DELETE"
        //     }),
        //     invalidatesTags:["Timelines"]
        //
        // })
    })

});

export const {
    // useTimelinesDetailsQuery,
    useAllTimelinesQuery,
    // useAddTimelinesMutation,
    // useUpdateTimelinesMutation,
    // useDeleteTimelinesMutation
} = timelinesApi;





