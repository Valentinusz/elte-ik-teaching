import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const puzzleApiSlice = createApi({
    reducerPath: "puzzleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/puzzles",
    }),
    tagTypes: ["Puzzle"],
    endpoints: (build) => ({
        getAllPuzzles: build.query({
            query: () => "",
            transformResponse: ({data}) => data,
            providesTags: ["Puzzle"]
        }),
        createPuzzle: build.mutation({
            query: (args) => ({
                url: "",
                method: "POST",
                body: args.body,
            }),
            invalidatesTags: ["Puzzle"]
        }),
        getPuzzle: build.query({
            query: (id) => `${id}`,
            providesTags: (result) => ([
                "Puzzle",
                {type: "Puzzle", id: result.id}
            ])
        })
    })
})

export const {useGetAllPuzzlesQuery, useCreatePuzzleMutation, useGetPuzzleQuery} = puzzleApiSlice;
