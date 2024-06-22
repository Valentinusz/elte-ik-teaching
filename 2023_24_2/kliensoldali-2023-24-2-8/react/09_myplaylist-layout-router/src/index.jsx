import React from "react";
import { createRoot } from "react-dom";

import { App } from "./views/App";
import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./views/home/Home";
import { Playlists } from "./views/playlists/Playlists";
import Layout from "./Layout";
import { Search } from "./views/search/Search";
import { Tracks } from "./views/tracks/Tracks";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/playlists",
        element: <Playlists />,
        children: [
          {
            path: ":playlistId",
            element: null,
            children: [
              {
                path: "tracks/:trackId",
                element: null,
              },
            ],
          },
        ],
      },
      {
        path: "/tracks",
        element: <Tracks />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
