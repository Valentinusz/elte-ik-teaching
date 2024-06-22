import React from "react";
import App from "./App";
// import { store } from "./state/store";
// import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "changeText",
  payload: "Körte",
});

// setTimeout(
//   () =>
//     store.dispatch({
//       type: "changeText",
//       payload: "Alma",
//     }),
//   3000
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
