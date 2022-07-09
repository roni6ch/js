import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(res => res.json());
        console.log(data);
        setList(data.map(item => item.name))
    };

    useEffect(() => { fetchData(); }, []);

    const changeHandler = (e) => { setValue(e.target.value); };

    const submitHandler = () => {
        if (value) {
            setList([...list, value]);
            setValue("");
        }
    };

    const deleteHandler = (item) => { setList(list.filter((ele) => ele !== item)); };

    return (
        <>
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