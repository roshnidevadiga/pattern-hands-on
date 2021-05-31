/* eslint-disable react/display-name */
import React from "react";
import Home from "./pages/home/Home";
import CustomHooks from "./pages/custom hooks/CustomHooks";
import CompoundUsage from "./pages/compound_components/Usage";

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
    {
        path: "/compound-component",
        sidebarName: "Compound Components",
        component: () => <CompoundUsage />,
    }
];

export default Routes;
