import React, { useState, useMemo } from 'react';

// Returns a memoized value (good for heavy calculations)
// on each render, isEven needs to recalculate again, this hook keep the old value until his getting changed

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memoizedIsEven = useMemo(() => {
        console.time();
        let i = 0;
        while (i < 1000000000) i++;
        console.timeEnd();
        return count % 2 === 0;
    }, [count]);

    const incrementOne = () => setCount(count + 1);
    const incrementTwo = () => setCountTwo(countTwo + 1);

    return <>
        <button onClick={incrementOne}> count {count}</button>
        <button onClick={incrementTwo}> countTwo {countTwo}</button>
        <div>{memoizedIsEven ? 'Even' : 'Odd'}</div>

    </>
}

export default UseMemo;