import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { request } from '../api/api'
import { QueryKeys } from '../api/query-keys'
import { User } from './Users.page'

export const fetchUserWithLimit = ({ pageNumber }: { pageNumber: number }) =>
    request({ url: `https://jsonplaceholder.typicode.com/users?_limit=2&_start=${pageNumber}` })


export const RQPaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const { isLoading, isError, error, data: users, isFetching } = useQuery([QueryKeys.USERS, pageNumber],
        () => fetchUserWithLimit({ pageNumber }), {
        keepPreviousData: true //keep data on screen until new data arrive, when clicking 'next' / 'back' buttons
    }
    )

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>error</h2>
    }

    return (
        <>
            <h1>RQ Paginated Queries</h1>
            <ul>
                {users?.map((user: User) => user && <li key={user?.id}>{user?.id} {user?.name}</li>)}
            </ul>
            <div>
                <button
                    onClick={() => setPageNumber(page => page - 1)}
                    disabled={pageNumber === 0}>
                    Prev Page
                </button>
                <button
                    onClick={() => setPageNumber(page => page + 1)}
                    disabled={pageNumber === 4}>
                    Next Page
                </button>
            </div>
            {isFetching && 'Loading'}
        </>
    )
}
