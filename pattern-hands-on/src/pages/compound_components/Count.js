/* eslint-disable react/prop-types */
import React from 'react';
import {CountContext} from './useCountContext';
import Increment from './Increment';
import Decrement from './Decrement';
import CountDisplay from './CountDisplay';

const Count = (props) => {
    return (
        <CountContext.Provider value={{test: 'sds'}}>
            <div>
                {props.children}
            </div>
        </CountContext.Provider>
    )
}
Count.Increment = Increment;
Count.Decrement = Decrement;
Count.CountDisplay = CountDisplay;

export default Count;