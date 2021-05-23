/* eslint-disable react/display-name */
import React from "react";
import Home from "./pages/home/Home";
import CustomHooks from "./pages/custom hooks/CustomHooks";

const Routes = [
    {
        path: "/",
        sidebarName: "Home",
        component: () => <Home />,
    },
    {
        path: "/custom-hooks",
        sidebarName: "Custom Hooks",
        component: () => <CustomHooks />,
    },
];

export default Routes;
