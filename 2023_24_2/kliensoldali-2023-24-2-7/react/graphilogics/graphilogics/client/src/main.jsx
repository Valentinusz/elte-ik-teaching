import React from "react";
import "./index.css";
import "./grafilogika.css";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./state/store.js";
import {startGame} from "./state/gameSlice.js";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
// import Login from "./views/Login.jsx";
import {GraphiLogics} from "./views/graphilogics/Graphilogics.jsx";
import App from "./views/App.jsx";
import Login from "./views/graphilogics/Login.jsx";
import RequireAuth from "./RequireAuth.jsx";
// import RequireAuth from "./views/RequireAuth.jsx";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<App/>*/}
            <BrowserRouter>
                <Routes>
                    <Route element={<div><Outlet/></div>}>
                        <Route path="/login" element={<Login/>}/>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <GraphiLogics/>
                                </RequireAuth>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// Log the initial state
// console.log("Initial state: ", store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log("State after dispatch: ", store.getState()));

// Now, dispatch some actions
store.dispatch(startGame(["# #", " # ", "# #"]));
// console.log(selectTable(store.getState()));

// unsubscribe();
