import { useState } from "react";

const MIN_CLICKS = 0,
    MAX_CLICKS = 10;

const useClickState = () => {
    const [clicks, setClick] = useState(0);

    const incrementClicks = () => {
        //Do not allow more than max clicks
        if (clicks === MAX_CLICKS) {
            return;
        }

        setClick(prevClickCount => prevClickCount + 1);
    };
    const decrementClicks = () => {
        //Do not allow less than min clicks
        if (clicks === MIN_CLICKS) {
            return;
        }
        setClick(prevClickCount => prevClickCount - 1);
    };

    return {
        clicks,
        incrementClicks,
        decrementClicks,
    };
};

export default useClickState;
