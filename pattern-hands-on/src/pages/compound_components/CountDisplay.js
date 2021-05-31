import React from "react";
import { useCountContext } from "./useCountContext";

const CountDisplay = () => {
    const { clicks } = useCountContext();
    return (
        <div>
            Clicks: <span>{clicks}</span>
        </div>
    );
};

export default CountDisplay;
