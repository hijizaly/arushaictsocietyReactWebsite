import {createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const passwordsAdapter=createEntityAdapter({});
const initialState=passwordsAdapter.getInitialState();

export const passwordsApi=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        passwordsDetails:builder.query({
            query:(id_)=>({
                url:"/passwords/"+id_,

                method:"GET",
            })
        }),
        allPasswords:builder.query({
            query:() => "allpassword",
            providesTags:["Passwords"]
        }),
        addPasswords:builder.mutation({
            query:(passwords)=>({
                url:"passwordregister",
                method:"POST",
                body: passwords,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags:['Passwords']
        }),
        updatePasswords:builder.mutation({
            query:({id,rest})=>({
                url:"/passwords/"+id,
                method:"PATCH",
                body:rest
            })
        }),
        deletePasswords:builder.mutation({
            query:(id)=>({
                url:"/passwords/${id}",
                method:"DELETE"
            }),
            invalidatesTags:["Passwords"]

        }),
        resetPassword:builder.mutation({
            query:(credentials)=>({
                url:"/resetpassword",
                method:"POST",
                body: credentials,
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
    usePasswordsDetailsQuery,
    useAllPasswordsQuery,
    useAddPasswordsMutation,
    useUpdatePasswordsMutation,
    useDeletePasswordsMutation,
    useResetPasswordMutation,
    useChangePasswordMutation

} = passwordsApi;





