import React, { useState } from 'react';

const Memoization = () => {
    const [count, setCount] = useState(0);
    console.log('Parent');

    return <>
        <h1>Memoization</h1>
        <h4>renders only if the props of the child getting changed.</h4>
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