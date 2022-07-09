import React, { useState, useEffect } from 'react'
import { fetchUsers } from '../hooks/useUsersData'

export type User = {
  id?: number,
  name: string,
  username: string
}

export const Users = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
      .then(res => {
        console.log(res)
        setUsers(res)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Users Page</h1>
      <ul>
        {users?.map(user => <li key={user.id}>{user.name} - {user.username}</li>)}
      </ul>
    </>
  )
}
