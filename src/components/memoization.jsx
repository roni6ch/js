import React, { useState } from 'react';

// renders only if the props of the child getting changed.

const Memoization = () => {
    const [count, setCount] = useState(0);
    console.log('Parent');

    return <>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <MemoizedChild />
    </>
}
const Child = () => {
    console.log('Child');
    return <h1>Hi!</h1>
}

const MemoizedChild = React.memo(Child);

export default Memoization;