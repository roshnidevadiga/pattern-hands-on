import React from "react";
import Description from "./Description";
import Count from "./Count";

const Usage = () => {
    return (
        <div>
            <Description />
            <Count>
                <Count.CountDisplay />
                <Count.Decrement />
                <Count.Increment />
            </Count>
        </div>
    );
};

export default Usage;
