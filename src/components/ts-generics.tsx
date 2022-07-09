import React from 'react';

type ListProps<T> = {
    items: T[];
}

const Generics = () => {
    return <>
        <GenericsMapper items={['John' , 'Jane']} />
        <GenericsMapper items={[1, 2, 3]} />
    </>
}

const GenericsMapper = <T extends string | number>({ items }: ListProps<T>) => {
    return <ul>{
        items.map((item, i) => <li key={i}>{item}</li>)
    }</ul>
}

export default Generics;