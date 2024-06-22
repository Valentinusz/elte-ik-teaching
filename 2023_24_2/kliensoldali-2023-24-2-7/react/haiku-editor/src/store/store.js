import { configureStore, createReducer, createSlice, createStore } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

// kezdeti állapot
const initialState = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
Mint hajnali fényt éjjel
Félve-remélve`
  ]
};

// reducer: (state, action) -> new state
// action: {type, payload} típus és érték

/// régi megoldás
// export const changeTextType = "changeText";
//
// export function changeText(payload) {
//   return (
//     {
//       type: "changeText",
//       payload
//     }
//   )
// }
//
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case changeTextType:
//       return {...state, editor: action.payload};
//     case "addHaiku":
//       return {...state, haikus: [...state.haikus, action.payload]};
//     default:
//       return state;
//   }
// }
//

// újabb megoldás
// export const store = createStore(reducer);

// export const changeText = createAction('changeText')
//
// export const store = configureStore({
//   reducer: createReducer(initialState, (builder) => {
//     builder.addCase('changeText', (state, action) => ({...state, editor: action.payload}))
//   })
// })

const vowels = "aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ";

const emptyArray = [];

const haikuSlice = createSlice({
  name: "haiku",
  initialState,
  // Immer könyvtár: mutálást átkonvertálja immutábilis változtatásokra
  reducers: {
    changeText: (state, action) => {
      state.editor = action.payload;
    },
    addHaiku: (state) => {
      state.haikus.push(state.editor);
    },
    selectHaiku: (state, { payload }) => {
      state.selectedIndex = payload;
      state.editor = state.haikus[payload];
    },
    modifyHaiku: (state) => {
      state.haikus[state.selectedIndex] = state.editor;
    },
    deleteHaiku: (state, {payload}) => {
      state.haikus = state.haikus.filter((_, index) => index !== payload)
    }
  },
  // ez csak akkor működik ha több slice van összekombinálva
  selectors: {
    selectEditorValue: (state) => state.editor,
    selectRowLengths: (state) => state.editor
      .split("\n")
      .map(row => row.split("").filter(letter => vowels.includes(letter)).length) ?? emptyArray,
    selectValid: (state) => {
      const rowLengths = haikuSlice.getSelectors().selectRowLengths(state)

      return rowLengths.length === 3 && rowLengths[0] === 5 && rowLengths[1] === 7 && rowLengths[2] === 5
    }
  }
});

// store létrehozása több sliceból
export const store = configureStore({
  reducer: {
    [haikuSlice.reducerPath]: haikuSlice.reducer
  }
});

// action creator-ok
export const { changeText, addHaiku, selectHaiku, modifyHaiku, deleteHaiku } = haikuSlice.actions;

// selectorok
export const { selectEditorValue, selectRowLengths, selectValid } = haikuSlice.selectors;
