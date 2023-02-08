// import {createSelector,createEntityAdapter} from "@reduxjs/toolkit";
// import {apiSlice} from "../../app/api/apiSlice";
//
// const usersAdapter = createEntityAdapter({});
// const initialState = usersAdapter.getInitialState();
//
// export const usersApiSlice=apiSlice.injectEndpoints({
//     endpoints:builder=>({
//         getUsers:builder.query({
//             query:()=>'/allmember',
//             validateStatus:(response,result)=>{
//               return response.status===200 && !result.isError
//             },
//             keepUnusedDataFor:5,
//             transformResponse:responseData=>{
//                 const loadedUsers=responseData.map(user=>{
//                     user.id=user._id
//                         return user
//                 });
//                 return usersAdapter.setAll(initialState,loadedUsers);
//             },
//             providesTags:(result,error,arg)=>{
//                 if(result?.ids){
//                     return [
//                         {type:'Users',id:'LIST'},
//                         ...result.ids.map(id=>({type:'User',id}))
//                     ];
//                 }else{
//                     return [{type:'User',id:'LIST'}];
//                 }
//
//             }
//
//         }),
//         getMembers:builder.query({
//              query: ()=>'/allmember',
//             providesTags:["Members"],
//             transformResponse : (response) => response.result
//
//         })
//     })
// });
//
// export const {
// useGetUsersQuery,
// }=usersApiSlice;
//
// export const selectUsersResult=usersApiSlice.endpoints.getUsers.select();
//
// // console.log(usersApiSlice);
// // console.log(apiSlice);
//
// const selectUsersData=createSelector(
//     selectUsersResult,
//     usersResult=>usersResult.data
// )
//
// export const {
//     selectAll:selectAllUsers,
//     selectById:selectUserById,
//     selectIds:selectUserIds
// } = usersAdapter.getSelectors(state=>selectUsersData(state) ?? initialState);
//
