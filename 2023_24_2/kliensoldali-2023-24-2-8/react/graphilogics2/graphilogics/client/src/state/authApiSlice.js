import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030",
    }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (args) => ({
                url: "/authentication",
                method: "POST",
                body: {
                    ...args.body, strategy: "local",
                }
            })
        })
    })
})

export const {useLoginMutation} = authApiSlice;
