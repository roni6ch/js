import { useQuery, useMutation, useQueryClient } from 'react-query'
import { request } from '../api/api';
import { QueryKeys } from '../api/query-keys';
import { User } from '../pages/Users.page';

export const fetchUsers = () => request({ url: "https://jsonplaceholder.typicode.com/users" })
export const addUser = (user: User) => request({ url: "https://jsonplaceholder.typicode.com/users", method: 'POST', body: JSON.stringify(user) })

export const useUsersData = (onSuccess: (data: User[]) => void, onError: (error: string) => void) => {
  return useQuery(QueryKeys.USERS, fetchUsers, {
    onSuccess,
    onError,
    staleTime: 5000, //if im on the page more then 5 sec, navigating back and forth -> it will fetch again new data
    // cacheTime: 10000,
    // refetchInterval: 2000, // (polling = Auto Refetching)
    // refetchOnMount: false, // will not trigger refetch when returning to the component
    // refetchOnWindowFocus: true, // (ensure that the data is updated when the user come back)
    // refetchIntervalInBackground: true,
  })
}

export const useAddUserData = () => {
  const queryClient = useQueryClient()
  let newUser: User;
  return useMutation((user: User) => {
    newUser = user;
    return addUser(user)
  }, {
    onSuccess: (data: User) => {
      /* Query Invalidation is for fetching automaticly again after update */
      // queryClient.invalidateQueries(QueryKeys.USERS)
      
      /* Prevent from query again - we update the data locallyon cache */
      queryClient.setQueryData(QueryKeys.USERS, (oldQueryData: User[]) => {
        return [
          ...oldQueryData,
          newUser
        ]
      })
    },

    /**Optimistic Update Start */
    onMutate: async (newUser: User) => {
      await queryClient.cancelQueries(QueryKeys.USERS) //first - need to cancel all prev requests
      const oldUsersData = queryClient.getQueryData(QueryKeys.USERS) // save old data
      queryClient.setQueryData(QueryKeys.USERS, (oldQueryData: { data: User[]; }) => { // update cache before api call
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newUser }
          ]
        }
      })
      return { oldUsersData } //Rollback - incase the mutation not working
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData(QueryKeys.USERS, context?.oldUsersData)
    },
    onSettled: () => {
      queryClient.invalidateQueries(QueryKeys.USERS)
    }
    /**Optimistic Update End */
  })
}
