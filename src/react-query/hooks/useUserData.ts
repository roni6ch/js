import { useQuery, useQueryClient } from 'react-query'
import { request } from '../api/api'
import { QueryKeys } from '../api/query-keys'
import { User } from '../pages/Users.page'

export const fetchUser = ({ queryKey }: { queryKey: any[] }) => request({ url: `https://jsonplaceholder.typicode.com/users/${queryKey[1]}` })

export const useUserData = ({
    id, onSuccess, onError,
}: {
    id: number, onSuccess: (data: User) => void, onError: (error: string) => void
}) => {
    const queryClient = useQueryClient()
    return useQuery([QueryKeys.USER, id], fetchUser, {
        onSuccess,
        onError,
        initialData: () => {
            // when we already have the data (from QueryKeys.USERS), initialData will be our data on screen until the fetch is over.
            const users = queryClient.getQueryData(QueryKeys.USERS);
            return (users as User[])?.find((user: User) => user.id === id);
        }
    })
}
