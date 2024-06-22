import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const puzzleServerSlice = createSlice({
    name: "puzzleServer",
    initialState: {
        loadPuzzles: {
            data: undefined,
            isSuccess: false,
            isLoading: false,
            isError: false,
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadPuzzlesFromApi.pending, (state) => {
            state.loadPuzzles.isLoading = true;
        }).addCase(loadPuzzlesFromApi.fulfilled, (state, {payload}) => {
            state.loadPuzzles.isLoading = false;
            state.loadPuzzles.data = payload
            state.loadPuzzles.isSuccess = true
        })
    }
})

export const loadPuzzlesFromApi = createAsyncThunk(
    "loadPuzzlesQuery",
    async () => {
        const response = await fetch("http://localhost:3030/puzzles")

        const data = await response.json();

        return data.data;
    }
)
