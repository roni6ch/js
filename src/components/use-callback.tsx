import React, { useState, useCallback } from 'react';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memoizedIncrement = useCallback(() => {
        console.log('Parent');
        setCountTwo(countTwo + 1)
    }, [countTwo]);

    return <>
        <h1>Use Callback</h1>
        <h4>memoized version of callback function - changes only if one of the dependecy getting changed</h4>
        <button onClick={() => setCount(count + 1)}>Parent count +</button>
        <Child memoizedIncrement={memoizedIncrement} />
    </>
}

const Child = ({ memoizedIncrement }: { memoizedIncrement: () => void }) => {
    console.log('Child');
    return <button onClick={memoizedIncrement}>Child countTwo +</button>
}

export default UseCallback;