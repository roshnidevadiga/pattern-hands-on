import React from 'react';

const Description = () => {
    return (
        <div>
            The compound components structure gives flexibily over what you want the component group structure to look and behave like.
            Say for example, I want to change the order of components - increment and decrement. If it was a homogenous component this would not have been possible
            without the component exposing a prop to change the order. Also say I want only the increment functionalty and button.
            Even this would be dependent on the component to make things available. With compound component structure, this control is passed on to the consumer

            <p>Here I am changing the order of the increment and decrement button which is handled by the consumer</p>
        </div>
    );
};

export default Description;