import React from 'react';
import { useQuery } from 'react-query';

export const RQParallel = () => {
    const { data: queryOne } = useQuery('query1-key', () => fetch('https://jsonplaceholder.typicode.com/users_limit=5').then(res => res.json()));
    const { data: queryTwo } = useQuery('query2-key', () => fetch('https://jsonplaceholder.typicode.com/albums?_limit=5').then(res => res.json()));

    console.log(queryOne, queryTwo);

    return <h1>Parallel Queries</h1>
}
