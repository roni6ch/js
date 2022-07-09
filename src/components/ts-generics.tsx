import React from 'react';

type ListProps<T> = {
    items: T[];
}

const Generics = () => {
    return <>
        <h1>Generics</h1>
        <h4>Typescript - Generic example to same component</h4>
        <GenericsMapper items={['John', 'Jane']} />
        <GenericsMapper items={[1, 2, 3]} />
    </>
}

const GenericsMapper = <T extends string | number>({ items }: ListProps<T>) => {
    return <ul>{
        items.map((item, i) => <li key={i}>{item}</li>)
    }</ul>
}

export default Generics;