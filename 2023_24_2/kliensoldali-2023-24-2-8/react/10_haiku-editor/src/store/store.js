import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"


const initialState = {
    editor: "",
    selectedIndex: null,
    haikus: [
        `Téged vártalak
  Mint hajnali fényt éjjel
  Félve-remélve`,
    ],
}

// import { createStore } from "@reduxjs/toolkit";

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case changeText:
//             return { ...state, editor: action.payload }
//         default:
//             return state;
//     }
// }

// export const store = createStore(reducer);

// const changeTextName = "changeText"

// export function changeText(arg) {
//     return {
//         type: changeTextName,
//         payload: arg
//     }
// }

export const store = configureStore({
    initialState: initialState,
    reducer: createReducer(initialState, {
        changeText: (state, { payload }) => ({ ...state, editor: payload })
    })
})

export const changeText = createAction("changeText")
