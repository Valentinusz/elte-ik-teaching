import { configureStore } from "@reduxjs/toolkit"
import { gameSlice } from "./gameSlice.js"
import {puzzleServerSlice} from "./puzzleServerSlice.js";
import {puzzleApiSlice} from "./puzzleApiSlice.js";
import {authApiSlice} from "./authApiSlice.js";
import {authSlice} from "./authSlice.js";
// import { puzzleSlice } from "./puzzleSlice.js";
// import { puzzleApiSlice } from "./puzzleApiSlice.js";
// import { authSlice } from "./authSlice.js";
// import { authApiSlice } from "./authApiSlice.js";

export const store = configureStore({
    reducer: {
        [gameSlice.name]: gameSlice.reducer,
        [puzzleServerSlice.name]: puzzleServerSlice.reducer,
        [authSlice.name]: authSlice.reducer,
        [puzzleApiSlice.reducerPath]: puzzleApiSlice.reducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(puzzleApiSlice.middleware).concat(authApiSlice.middleware)
    )
})
