import {apiSlice} from "../../app/api/apiSlice";
import {logOut} from "./authSlice";


export const authApiSlice=apiSlice.injectEndpoints({
    endpoints:builder => ({
        login:builder.mutation({
            query:credentials=>({
                url:'memberlogin',
                method:'POST',
                body:{...credentials}
            })
        }),
        sendLogout: builder.mutation({
            query:()=>({
                url:'memberlogout',
                method:'POST',
            }),
            async onQueryStarted(arg, {dispatch,queryFulfilled}){
                try {
                    await queryFulfilled
                    dispatch(logOut())
                    dispatch(apiSlice.util.resetApiState)

                }catch (err) {
                    console.log(err);

                }
            }
        }),
        adminLogin:builder.mutation({
            query:credentials=>({
                url:'adminlogin',
                method:'POST',
                body:{...credentials}
            })
        }),
        adminLogout: builder.mutation({
            query:()=>({
                url:'adminlogout',
                method:'POST',
            }),
            async onQueryStarted(arg, {dispatch,queryFulfilled}){
                try {
                    await queryFulfilled
                    dispatch(logOut())
                    dispatch(apiSlice.util.resetApiState)

                }catch (err) {
                    console.log(err);

                }
            }
        }),

    })
});

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useAdminLoginMutation,
    useAdminLogoutMutation

}=authApiSlice
