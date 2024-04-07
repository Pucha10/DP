import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import AboutMe from "./components/pages/AboutMe.tsx";
import Contact from "./components/pages/Contact.tsx";
import Resume from "./components/pages/resume.tsx";
import Projects from "./components/pages/Projects.tsx";

import "bootstrap/dist/css/bootstrap.css";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>404 Not Found</div>,
    },
    {
        path: "/AboutMe",
        element: <AboutMe />,
        errorElement: <div>404 Not Found</div>,
    },
    {
        path: "/Projects",
        element: <Projects />,
        errorElement: <div>404 Not Found</div>,
    },
    {
        path: "/Resume",
        element: <Resume />,
        errorElement: <div>404 Not Found</div>,
    },
    {
        path: "/Contact",
        element: <Contact />,
        errorElement: <div>404 Not Found</div>,
    },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
