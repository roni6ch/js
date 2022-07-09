import React, { useState, useCallback } from 'react';

// Returns a memoized version of callback function
// changes only if one of the dependecy getting changed

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memoizedIncrement = useCallback(() => {
        console.log('Parent');
        setCountTwo(countTwo + 1)
    }, [countTwo]);

    return <>
        <button onClick={() => setCount(count + 1)}>Parent count +</button>
        <Child memoizedIncrement={memoizedIncrement} />
    </>
}

const Child = ({ memoizedIncrement }) => {
    console.log('Child');
    return <button onClick={memoizedIncrement}>Child countTwo +</button>
}

export default UseCallback;