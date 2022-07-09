import React, { useState } from 'react';

const CustomHook = () => {
    return <>
        <h1>Custom Hook</h1>
        <h4>share logic code between components using custom hooks</h4>
        <CounterOne /> |||
        <CounterTwo />
    </>
}

const useCounter = (initialCount: number = 0, value: number): [number, () => void, () => void] => {
    const [count, setCount] = useState<number>(initialCount);

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