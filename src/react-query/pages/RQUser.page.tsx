import React from 'react';
import { useParams } from 'react-router-dom'
import { useUserData } from '../hooks/useUserData'
import { User } from './Users.page';

export const RQUser = () => {
    const { id } = useParams()

    const onSuccess = (data: User) => console.log({ data })
    const onError = (error: string) => console.log({ error })

    const { isLoading, data, isError, error } = useUserData({
        id: +id!, onSuccess, onError,
    });
    
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    console.log('🚀 ~ isError', isError)
    if (isError) {
        return <h2>{error}</h2>
    }

    return (
        <>
            <h1>User</h1>
            <h2>{data?.name} - {data?.username}</h2>
        </>
    )
}
