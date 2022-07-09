import React from 'react';
import { useQuery } from 'react-query'
import { QueryKeys } from '../api/query-keys'
import { fetchUser } from '../hooks/useUserData'

export const RQDependentQueries = () => {
    const { data: userOne } = useQuery('query1-key', () => fetchUser({ queryKey: [QueryKeys.USER, 1] }))
    const { data: userTwo } = useQuery('query2-key', () => fetchUser({ queryKey: [QueryKeys.USER, 2] }), {
        enabled: !!userOne?.id, // run only when the first api call is successful
    })
    return <>
        <h1>Dependent Queries</h1>
        <ul>
            <li>{userOne?.name}</li>
            <li>{userTwo?.name}</li>
        </ul>
    </>
}
