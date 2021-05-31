import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useClickState from "./useClickState";
import { MIN_CLICKS, MAX_CLICKS } from "./constants";

/*
A simple increment decrement counter using custom hooks
1. min value should be 0
2. max value should be 10. After this the onClick on increment would not function and button will be disabled

Separated the logic into a custom hook
*/

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const CustomHooks = () => {
    const classes = useStyles();
    const { clicks, incrementClicks, decrementClicks } = useClickState();

    return (
        <>
            Home
            <div className={classes.root}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={incrementClicks}
                    disabled={clicks === MAX_CLICKS}>
                    Increment
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={decrementClicks}
                    disabled={clicks === MIN_CLICKS}>
                    Decrement
                </Button>
                <div>
                    Clicks: <span>{clicks}</span>
                </div>
            </div>
        </>
    );
};

export default CustomHooks;
