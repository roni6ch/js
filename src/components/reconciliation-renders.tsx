import React, { useState } from 'react';

const ReconciliationRenders = () => {
    const [count, setCount] = useState(0);
    console.log('Parent');

    return <>
        <h1>Reconciliation Renders</h1>
        <h4>open console...</h4>
        <ul>
            <li> initial render = parent renders and then child renders<span>(All counters)</span></li>
            <li> on every render (state is not the same) = parent and child renders...<span>(count + 1)</span></li>
            <li> after initial render, (next state === old state) = parent and child NOT renders.<span>(count = 0)</span></li>
            <li> after initial render = parent and child renders, after re-render, (next state === old state) = parent render, child NOT renders<span>(count = 5)</span></li>
        </ul>
        <button onClick={() => setCount(count + 1)}>count + 1</button>
        <button onClick={() => setCount(0)}>count = 0</button>
        <button onClick={() => setCount(5)}>count = 5</button>
        <Child />
    </>
}

const Child = () => {
    console.log('Child');
    return <></>
}

export default ReconciliationRenders;