/* eslint-disable react/prop-types */
import React from "react";
import { CountContext } from "./useCountContext";
import Increment from "./Increment";
import Decrement from "./Decrement";
import CountDisplay from "./CountDisplay";
import useClickState from "./useClickState";

const Count = props => {
    const { clicks, incrementClicks, decrementClicks } = useClickState();
    return (
        <CountContext.Provider value={{ clicks, incrementClicks, decrementClicks }}>
            <div>{props.children}</div>
        </CountContext.Provider>
    );
};
Count.Increment = Increment;
Count.Decrement = Decrement;
Count.CountDisplay = CountDisplay;

export default Count;
