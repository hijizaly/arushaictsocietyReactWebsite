import {createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const contentsAdapter=createEntityAdapter({});
const initialState=contentsAdapter.getInitialState();

export const contentsApi=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        contentsDetails:builder.query({
            query:(id_)=>({
                url:"/contents/"+id_,

                // url:"/contents/2",
                method:"GET",
                // providesTags:["Contents"]
            })
        }),
        allContents:builder.query({
            query:() => "contents",
            providesTags:["Contents"]
        }),
        allContentsIds:builder.query({
            query:() => "contentsIds",
            providesTags:["ContentsIds"]
        }),
        addContents:builder.mutation({
            query:(contents)=>({
                url:"contents",
                method:"POST",
                body: contents,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags:['Contents']
        }),
        updateContents:builder.mutation({
            query:({id,rest})=>({
                url:"/contents/"+id,
                method:"PATCH",
                body:rest
            })
        }),
        deleteContents:builder.mutation({
            query:(id)=>({
                url:"/contents/${id}",
                method:"DELETE"
            }),
            invalidatesTags:["Contents"]

        }),

    })

});

export const {
    useContentsDetailsQuery,
    useAllContentsQuery,
    useAllContentsIdsQuery,
    useAddContentsMutation,
    useUpdateContentsMutation,
    useDeleteContentsMutation,
    useForgetPasswordMutation,
    useResetForgetPasswordMutation,
    useChangePasswordMutation,
    useIsEmailExistenceMutation,

} = contentsApi;





