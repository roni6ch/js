import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [list, setList] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(res => res.json());
        console.log(data);
        setList(data.map((item: { name: string; }) => item.name))
    };

    useEffect(() => { fetchData(); }, []);

    const changeHandler = (e: any) => { setValue(e.target.value); };

    const submitHandler = () => {
        if (value) {
            setList([...list, value]);
            setValue("");
        }
    };

    const deleteHandler = (item: string) => { setList(list.filter((ele) => ele !== item)); };

    return (
        <>
            <h1>Cart</h1>
            <h4>Simple example (Add, Remove, Fetch)</h4>
            <label>Add<input value={value} onChange={changeHandler} /></label>
            <button onClick={submitHandler}>+</button>
            <ul> {
                list.map((item) => <li key={item} onClick={() => deleteHandler(item)}><span>X</span> {item}</li>
                )}
            </ul>
        </>
    );
};

export default Cart;