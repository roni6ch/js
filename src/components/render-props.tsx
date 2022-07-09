import React, { ReactNode, useState } from 'react';

const RenderProps = () => (
    <>
        <h1>Render Props</h1>
        <h4> sharing logic code between components using prop whose value is a function</h4>
        <Child render={(isLoggedIn: boolean) => isLoggedIn ? 'Hey!' : 'Bye Bye...'} />

        <Counter render={(count: number, incCount: () => void) => <ClickCounter count={count} incCount={incCount} />} />
        <Counter render={(count: number, incCount: () => void) => <HoverCounter count={count} incCount={incCount} />} />
    </>
);

const Child = ({ render }: { render: (isLoggedIn: boolean) => ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {render(isLoggedIn)}
    </button>;
}

const Counter = ({ render }: { render: (count: number, incCount: () => void) => ReactNode }) => {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount(count + 1);
    }

    return <>{render(count, incCount)}</>
}

const ClickCounter = ({ count, incCount }: { count: number, incCount: () => void }) => {
    return <button onClick={incCount}>Clicked {count} Times!</button>;
}
const HoverCounter = ({ count, incCount }: { count: number, incCount: () => void }) => {
    return <button onMouseOver={incCount}>Hovered {count} Times!</button>;
}

export default RenderProps;