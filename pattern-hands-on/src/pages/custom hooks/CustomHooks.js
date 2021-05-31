import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

/*
A simple increment decrement counter using custom hooks
1. min value should be 0
2. max value should be 10. After this the onClick on increment would not function and button will be disabled
*/

const MIN_CLICKS = 0,
MAX_CLICKS = 10;

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const CustomHooks = () => {
    const classes = useStyles();
    const [clicks, setClick] = useState(0);

    const incrementClicks = () => {
        //Do not allow more than max clicks
        if(clicks===MAX_CLICKS) {
            return;
        }

        setClick(prevClickCount => prevClickCount + 1);
    };
    const decrementClicks = () => {
        //Do not allow less than min clicks
        if(clicks===MIN_CLICKS) {
            return;
        }
        setClick(prevClickCount => prevClickCount - 1);
    };

    return (
        <>
            Home
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={incrementClicks} disabled={clicks===MAX_CLICKS}>
                    Increment
                </Button>
                <Button variant="contained" color="primary" onClick={decrementClicks} disabled={clicks===MIN_CLICKS}>
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
