import React, { useState } from 'react';

// sharing logic code between components using prop whose value is a function
const RenderProps = () => (
    <>
        <Child render={isLoggedIn => isLoggedIn ? 'Hey!' : 'Bye Bye...'} />

        <Counter render={(count, incCount) => <ClickCounter count={count} incCount={incCount} />} />
        <Counter render={(count, incCount) => <HoverCounter count={count} incCount={incCount} />} />
    </>
);

const Child = ({ render }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <div onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {render(isLoggedIn)}
    </div>;
}

const Counter = ({ render }) => {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount(count + 1);
    }

    return render(count, incCount);
}

const ClickCounter = ({ count, incCount }) => {
    return <div onClick={incCount}>Clicked {count} Times!</div>;
}
const HoverCounter = ({ count, incCount }) => {
    return <div onMouseOver={incCount}>Hovered {count} Times!</div>;
}

export default RenderProps;