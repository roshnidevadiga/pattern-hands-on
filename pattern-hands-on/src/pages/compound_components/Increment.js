import React from "react";
import Button from "@material-ui/core/Button";
import { useCountContext } from "./useCountContext";
import { MAX_CLICKS } from "./constants";

const Increment = () => {
    const { clicks, incrementClicks } = useCountContext();
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={incrementClicks}
            disabled={clicks === MAX_CLICKS}>
            Increment
        </Button>
    );
};

export default Increment;
