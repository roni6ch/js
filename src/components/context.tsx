import React, { useState, useContext } from 'react';

const CountContext = React.createContext({ count: 0, incCount: () => { } });

const Context = () => {
    const [count, setCount] = useState(0);

    const incCount = () => setCount(count + 1);

    return <CountContext.Provider value={{ count, incCount }}>
        <h1>Context</h1>
        <h4>Pass data through the component tree without having to pass props down manually at every level</h4>
        <Child />
       
    </CountContext.Provider>
}

const Child = () => {
    const { count, incCount } = useContext(CountContext);

    return <button onClick={incCount}>Child +<span>{count}</span></button>
}

export default Context;