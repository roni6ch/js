import React from 'react';
import { useQueries } from 'react-query';
import { QueryKeys } from '../api/query-keys';
import { fetchUser } from '../hooks/useUserData';
import { User } from './Users.page';

export const RQDynamicParallel = ({ userIds }: { userIds: number[] }) => {
    const queryResults = useQueries(
        userIds.map(id => {
            return {
                queryKey: [QueryKeys.USER, id],
                queryFn: () => fetchUser({ queryKey: [QueryKeys.USER, id] }),
            }
        })
    )

    const users = queryResults?.map(res => res.data);
    return <>
        <h1>Dynamic Parallel Queries</h1>
        <ul>
            {users?.map((user: User) => user && <li key={user?.id}>{user?.name}</li>)}
        </ul>
    </>
}
