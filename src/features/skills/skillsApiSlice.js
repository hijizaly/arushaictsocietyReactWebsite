import {createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const skillsAdapter=createEntityAdapter({});
const initialState=skillsAdapter.getInitialState();

export const skillsApi=apiSlice.injectEndpoints({

    endpoints:(builder)=>({
        allSkills:builder.query({
            query:() => "skills",
            // providesTags:["Skills"]
        }),
        addOtherSkills:builder.mutation({
            query:({otherSkills})=>({
                url:"/otherskills",
                method:"POST",
                body:otherSkills
            })
        }),
        // updateSkills:builder.mutation({
        //     query:({id,...rest})=>({
        //         url:"/${id}",
        //         method:"PATCH",
        //         body:rest
        //     })
        // }),
        deleteOtherSkills:builder.mutation({
            query:({otherSkills})=>({
                url:"/otherskills",
                method:"DELETE",
                body:otherSkills
            }),
            invalidatesTags:["otherSkills"]

        })
    })

});

export const {
    useAddOtherSkillsMutation,
    useDeleteOtherSkillsMutation,
    useAllSkillsQuery,

    // useAddSkillsMutation,
    // useUpdateSkillsMutation,
    // useDeleteSkillsMutation
} = skillsApi;





