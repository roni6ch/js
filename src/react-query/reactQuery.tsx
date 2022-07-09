import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQLinks } from '../App';


const queryClient = new QueryClient()

const ReactQuery = () => {
  return <QueryClientProvider client={queryClient}>
    <nav className="nav rq-nav">
      <ul>
        <li><NavLink to={RQLinks.TraditionalUsers}>Traditional Users</NavLink></li>
        <li><NavLink to={RQLinks.RQUsers}>RQ Users</NavLink></li>
        <li><NavLink to={RQLinks.RQParallel}>RQ Parallel</NavLink></li>
        <li><NavLink to={RQLinks.RQDynamicParallel}>RQ Dynamic Parallel</NavLink></li>
        <li><NavLink to={RQLinks.RQDependentParallel}>RQ Dependent Queries</NavLink></li>
        <li><NavLink to={RQLinks.RQPaginatedParallel}>RQ Paginated Queries</NavLink></li>
      </ul>
    </nav>
    <Outlet />
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
}

export default ReactQuery
