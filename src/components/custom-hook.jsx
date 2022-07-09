import React, { useState } from 'react';

// sharing logic code between components using custom hooks

const CustomHook = () => {
    return <><CounterOne /><CounterTwo /></>
}

const useCounter = (initialCount = 0, value) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + value);
    const reset = () => setCount(initialCount);

    return [count, increment, reset];
}


const CounterOne = () => {
    const [count, increment] = useCounter(0, 1);
    return <button onClick={increment}>{count}</button>
}

const CounterTwo = () => {
    const [count, increment, reset] = useCounter(1, 5);

    return <>
        <button onClick={increment}>{count}</button>
        <button onClick={reset}>Reset</button>
    </>
}


export default CustomHook;