import React, { useState, useContext } from 'react';

// Pass data through the component tree without having to pass props down manually at every level

const CountContext = React.createContext();

const Context = () => {
    const [count, setCount] = useState(0);

    const incCount = () => setCount(count + 1);

    return <CountContext.Provider value={{ count, incCount }}>
        <h1>{count}</h1>
        <Child />
    </CountContext.Provider>
}

const Child = () => {
    const { incCount } = useContext(CountContext);
    
    return <button onClick={incCount}>Child +</button>
}

export default Context;