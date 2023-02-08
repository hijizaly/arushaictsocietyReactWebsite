import {createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const membersAdapter=createEntityAdapter({});
const initialState=membersAdapter.getInitialState();

export const membersApi=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        membersDetails:builder.query({
            query:(id_)=>({
                url:"/members/"+id_,

                // url:"/members/2",
                method:"GET",
                // providesTags:["Members"]
            })
        }),
        allMembers:builder.query({
            query:() => "allmember",
            providesTags:["Members"]
        }),
        addMembers:builder.mutation({
            query:(members)=>({
                url:"memberregister",
                method:"POST",
                body: members,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags:['Members']
        }),
        updateMembers:builder.mutation({
            query:({id,rest})=>({
                url:"/members/"+id,
                method:"PATCH",
                body:rest
            })
        }),
        deleteMembers:builder.mutation({
            query:(id)=>({
                url:"/members/${id}",
                method:"DELETE"
            }),
            invalidatesTags:["Members"]

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
    useMembersDetailsQuery,
    useAllMembersQuery,
    useAddMembersMutation,
    useUpdateMembersMutation,
    useDeleteMembersMutation,
    useForgetPasswordMutation,
    useResetForgetPasswordMutation,
    useChangePasswordMutation

} = membersApi;





