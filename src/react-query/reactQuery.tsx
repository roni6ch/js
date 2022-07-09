import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {
  Users,
  RQUsers,
  RQUser,
  RQParallel,
  RQDynamicParallel,
  RQDependentQueries,
  RQPaginatedQueries
} from './pages'

const queryClient = new QueryClient()

const ReactQuery = () => {
  return <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <nav className="nav">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/users'>Traditional Users</NavLink></li>
          <li><NavLink to='/rq-users'>RQ Users</NavLink></li>
          <li><NavLink to='/rq-parallel'>RQ Parallel</NavLink></li>
          <li><NavLink to='/rq-dynamic-parallel'>RQ Dynamic Parallel</NavLink></li>
          <li><NavLink to='/rq-dependent-queries'>RQ Dependent Queries</NavLink></li>
          <li><NavLink to='/rq-paginated-queries'>RQ Paginated Queries</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/rq-users' element={<RQUsers />} />
        <Route path='/rq-user/:id' element={<RQUser />} />
        <Route path='/rq-parallel' element={<RQParallel />} />
        <Route path='/rq-dynamic-parallel' element={<RQDynamicParallel userIds={[1,3]} />} />
        <Route path='/rq-dependent-queries' element={<RQDependentQueries />} />
        <Route path='/rq-paginated-queries' element={<RQPaginatedQueries />} />
        <Route path='/' element={<h1>React Query :)</h1>} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
}


export default ReactQuery
