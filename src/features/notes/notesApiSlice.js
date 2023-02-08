import {createSelector,createEntityAdapter} from "@reduxjs/toolkit";
import {apiSlice} from "../../app/api/apiSlice";

const notesAdapter = createEntityAdapter({});
const initialState = notesAdapter.getInitialState();

export const notesApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getNotes:builder.query({
            query:()=>'/notes',
            validateStatus:(response,result)=>{
                return response.status===200 && !result.isError
            },
            keepUnusedDataFor:5,
            transformResponse:responseData=>{
                const loadedNotes=responseData.map(user=>{
                    user.id=user._id
                    return user
                });
                return notesAdapter.setAll(initialState,loadedNotes);
            },
            providesTags:(result,error,arg)=>{
                if(result?.ids){
                    return [
                        {type:'Member',id:'LIST'},
                        ...result.ids.map(id=>({type:'Member',id}))
                    ];
                }else{
                    return [{type:'Member',id:'LIST'}];
                }

            }

        })
    })
});

export const {
    useGetNotesQuery,
}=notesApiSlice;

export const selectUserResult=notesApiSlice.notesApiSlice.endpoints.getNotes.select();

export const selectUserData=createSelector(
    selectNotesResult,
    notesResult=>notesResult.data
);

export const {
    selectAll:selectAllNotes,
    selectById:selectUserById,
    selectIds:selectUserIds
}=notesAdapter.getSelectors(state=>selectNotesData(state) ?? initialState);