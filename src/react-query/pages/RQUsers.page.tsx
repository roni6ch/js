import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../../App'
import { useUsersData, useAddUserData } from '../hooks/useUsersData'
import { User } from './Users.page'

/* Transitions
Fresh => data read from cache - no network request! 
Stale => data need to be fetched again

StaleTime: The duration until a query transitions from fresh to stale. (default: 0) 
CacheTime: The duration until inactive queries will be removed from the cache. (default: 5000) 

1. first time => isLoading + isFetching = true
2. req is complete => data get cached => isLoading + isFetching = false
3. navigating back and forth => data return from cache => isLoading is false (as long its "fresh" transition)
*/
export const RQUsers = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const onSuccess = (data: User[]) => console.log({ data })
    const onError = (error: string) => console.log({ error })

    const { data, isLoading, isFetching, isError, error, refetch } = useUsersData(
        onSuccess,
        onError
    )

    const { mutate: addUser } = useAddUserData()

    const handleAddUserClick = () => {
        const user: User = { name, username }
        addUser(user)
    }

    console.log({ isLoading, isFetching })
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error}</h2>
    }

    return (
        <>
            <h1>React Query Users Page</h1>
            <div>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="name" />
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username"/>
                <button onClick={handleAddUserClick}>Add user</button>
            <button onClick={() => refetch()}><span>Fetch users</span></button>
            </div>
            <ul>{data?.map((user: User) => {
                return (
                    <li key={user.name}>
                        <Link to={`${Links.ReactQuery}/rq-user/${user.id}`}>
                            {user.name} - {user.username}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </>
    )
}
