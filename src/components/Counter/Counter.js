import React, { useState } from 'react';
const { useReducer } = React;






const ButtonStyle = {
    color: "#33A0FF",
    border: "none"
};
const CounterStyle = {
    display: "inline-block",
    backgroundColor: "#EFEFEF",
    paddingTop: "8px",
    paddingBottom: "9px",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const increment = () => ({ type: "increment" });
const decrement = () => ({ type: "decrement" });

const Counter = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <button style={ButtonStyle} onClick={() => dispatch(decrement())}>-</button>
            <p style={CounterStyle}>{state.count}</p>
            <button style={ButtonStyle} onClick={() => dispatch(increment())}>+</button>
        </>

    );
};

export default Counter;




