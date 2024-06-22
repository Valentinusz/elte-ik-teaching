import React from "react";
import { createRoot } from "react-dom";

import { App } from "./views/App";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./views/home/Home";
import { Playlists } from "./views/playlists/Playlists";
import Layout from "./views/Layout";
import { Search } from "./views/search/Search";
import { Tracks } from "./views/tracks/Tracks";

const router = createBrowserRouter([
  {
    path: "/",
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
            path: "/playlists/:playlistId",
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
