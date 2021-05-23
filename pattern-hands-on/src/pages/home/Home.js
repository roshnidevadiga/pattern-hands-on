import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    const [clicks, setClick] = useState(0);

    const incrementClicks = () => {
        setClick(prevClickCount => prevClickCount + 1);
    };
    const decrementClicks = () => {
        setClick(prevClickCount => prevClickCount - 1);
    };

    return (
        <>
            Home
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={incrementClicks}>
                    Increment
                </Button>
                <Button variant="contained" color="primary" onClick={decrementClicks}>
                    Decrement
                </Button>
                <div>
                    Clicks: <span>{clicks}</span>
                </div>
            </div>
        </>
    );
};

export default Home;
