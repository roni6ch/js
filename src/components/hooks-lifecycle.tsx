import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

// React lifecycle methods in hooks

const HooksLifecycle = () => {
    const [count, setCount] = useState(0);

    // componentWillmount()
    const willMount = useRef(true);
    if (willMount.current) {
        console.log('This runs only once before rendering the component.');
        willMount.current = false;
    }

    useLayoutEffect(() => {
        // DOM measurements (like getting the scroll position or other styles for an element)
        // runs immediately after the DOM has been updated, 
        // but before the browser has had a chance to "paint" those changes 
        // (the user doesn't actually see the updates until after the browser has repainted).
        console.log('useLayoutEffect');
    }, []);

    // componentDidMount()
    useEffect(() => { // runs only once
        console.log('useEffect 1');
    }, []);

    // componentDidUpdate()
    useEffect(() => { // runs on every update
        console.log('useEffect 2');
    });

    // componentDidUpdate()
    useEffect(() => { // runs if 'count' got changed
        console.log('useEffect 3');
        return () => {
            // componentWillUnmount()
            console.log('unmount'); // runs on unmount
        }
    }, [count]);

    console.log("--------\nParent", count);
    return <>
        <h1>HooksLifecycle</h1>
        <h4>open console...</h4>
        <img src="../images/hooks-lifecycle.jpg" alt="hooks-lifecycle" width={900} />
        <div>
        <button onClick={() => setCount(count + 1)}> + </button>
        <button onClick={() => setCount(count)}> =</button>
        <MemoizedChild count={count}></MemoizedChild>
        </div>
    </>
}

const Child = ({ count }: { count: number }) => {
    console.log("Child", count);
    return <h1>Child! {count} </h1>
}

// shouldComponentUpdate()
const MemoizedChild = React.memo(Child, (prevProps, nextProps) => {
    console.log("prevProps", prevProps, " ,nextProps", nextProps);
    return prevProps.count === nextProps.count; // if they are equal => no need to re-render
});

export default HooksLifecycle;