import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Books from "../pages/books";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/books',
        element: <Books />
    }
])