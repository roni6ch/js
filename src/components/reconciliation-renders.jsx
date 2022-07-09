import React, { useState } from 'react';

const ReconciliationRenders = () => {
    const [count, setCount] = useState(0);
    console.log('Parent');

    return <>{/* initial render => parent renders and then child renders */}

        {/* on every render (state is not the same) => parent and child renders... */}
        <button onClick={() => setCount(count + 1)}>count + 1</button>

        {/* after initial render, (next state === old state) => parent and child NOT renders */}
        <button onClick={() => setCount(0)}>count = 0</button>

        {/* after initial render => parent and child renders, 
         after re-render, (next state === old state) => parent render, child NOT renders */}
        <button onClick={() => setCount(5)}>count = 5</button>
        <Child />
    </>
}

const Child = () => {
    console.log('Child');
}

export default ReconciliationRenders;