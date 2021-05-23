import React from "react";

const Routes = [
    {
        path: "/",
        sidebarName: "Home",
        component: () => <div>Home</div>,
    },
    {
        path: "/custom-hooks",
        sidebarName: "Custom Hooks",
        component: () => <div>Custom Hooks</div>,
    },
];

export default Routes;
