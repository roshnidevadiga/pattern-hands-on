import React from "react";
import Button from "@material-ui/core/Button";
import { useCountContext } from "./useCountContext";
import { MIN_CLICKS } from "./constants";

const Decrement = () => {
    const { clicks, decrementClicks } = useCountContext();
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={decrementClicks}
            disabled={clicks === MIN_CLICKS}>
            Decrement
        </Button>
    );
};

export default Decrement;
