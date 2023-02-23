import {createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const adminAdapter=createEntityAdapter({});
const initialState=adminAdapter.getInitialState();

export const adminApi=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        adminDetails:builder.query({
            query:(id_)=>({
                url:"/admin/"+id_,

                // url:"/admin/2",
                method:"GET",
                // providesTags:["Admin"]
            })
        }),
        allAdmin:builder.query({
            query:() => "allmember",
            providesTags:["Admin"]
        }),
        addAdmin:builder.mutation({
            query:(admin)=>({
                url:"memberregister",
                method:"POST",
                body: admin,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags:['Admin']
        }),
        updateAdmin:builder.mutation({
            query:({id,rest})=>({
                url:"/admin/"+id,
                method:"PATCH",
                body:rest
            })
        }),
        deleteAdmin:builder.mutation({
            query:(id)=>({
                url:"/admin/${id}",
                method:"DELETE"
            }),
            invalidatesTags:["Admin"]

        }),
        forgetPassword:builder.mutation({
            query:(credentials)=>({
                url:"/forgetpassword",
                method:"POST",
                body: credentials,
            })
        }),
        resetForgetPassword:builder.mutation({
            query:({urlId,credentials})=>({
                url:"/forgetpassword/"+urlId,
                method:"POST",
                body:credentials,
            })
        }),
        changePassword:builder.mutation({
            query:(credentials)=>({
                url:"/changepassword",
                method:"POST",
                body: credentials,
            })
        }),

    })

});

export const {
    useAdminDetailsQuery,
    useAllAdminQuery,
    useAddAdminMutation,
    useUpdateAdminMutation,
    useDeleteAdminMutation,
    useForgetPasswordMutation,
    useResetForgetPasswordMutation,
    useChangePasswordMutation,
    useIsEmailExistenceMutation,

} = adminApi;





