import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import ReconciliationRenders from "./components/reconciliation-renders";
import HooksLifecycle from "./components/hooks-lifecycle";
import RenderProps from "./components/render-props";
import Memoization from "./components/memoization";
import UseMemo from "./components/use-memo";
import UseCallback from "./components/use-callback";
import Context from "./components/context";
import CustomHook from "./components/custom-hook";
import Cart from "./components/cart";
import Generics from "./components/ts-generics";
import RestrictProps from "./components/ts-restrict-props";
import TemplateLiterals from "./components/ts-template-literals";
import ReactQuery from './react-query/reactQuery';
import { Users, RQUsers, RQUser, RQParallel, RQDynamicParallel, RQDependentQueries, RQPaginatedQueries } from './react-query/pages';

export enum Links {
  Reconciliation = '/reconciliation',
  HooksLifecycle = '/hooks-life-cycle',
  Memoization = '/memoization',
  UseMemo = '/use-memo',
  UseCallback = '/use-callback',
  RenderProps = '/render-props',
  Context = '/context',
  CustomHook = '/custom-hook',
  Cart = '/cart',
  Generics = '/generics',
  RestrictProps = '/restrict-props',
  TemplateLiterals = '/template-literals',
  ReactQuery = '/react-query',
}

export enum RQLinks {
  TraditionalUsers = 'users',
  RQUsers = 'rq-users',
  RQUser = 'rq-user/:id',
  RQParallel = 'rq-parallel',
  RQDynamicParallel = 'rq-dynamic-parallel',
  RQDependentParallel = 'rq-dependent-parallel',
  RQPaginatedParallel = 'rq-paginated-parallel',
}

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <ul>
            <li><NavLink to={Links.Reconciliation}>Reconciliation</NavLink></li>
            <li><NavLink to={Links.HooksLifecycle}>HooksLifecycle</NavLink></li>
            <li><NavLink to={Links.Memoization}>Memoization</NavLink></li>
            <li><NavLink to={Links.UseMemo}>UseMemo</NavLink></li>
            <li><NavLink to={Links.UseCallback}>UseCallback</NavLink></li>
            <li><NavLink to={Links.RenderProps}>RenderProps</NavLink></li>
            <li><NavLink to={Links.Context}>Context</NavLink></li>
            <li><NavLink to={Links.CustomHook}>CustomHook</NavLink></li>
            <li><NavLink to={Links.Cart}>Cart</NavLink></li>
            <li><NavLink to={Links.Generics}>Generics</NavLink></li>
            <li><NavLink to={Links.RestrictProps}>RestrictProps</NavLink></li>
            <li><NavLink to={Links.TemplateLiterals}>TemplateLiterals</NavLink></li>
            <li><NavLink to={Links.ReactQuery}>ReactQuery</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path={Links.Reconciliation} element={<ReconciliationRenders />} />
          <Route path={Links.HooksLifecycle} element={<HooksLifecycle />} />
          <Route path={Links.Memoization} element={<Memoization />} />
          <Route path={Links.UseMemo} element={<UseMemo />} />
          <Route path={Links.UseCallback} element={<UseCallback />} />
          <Route path={Links.RenderProps} element={<RenderProps />} />
          <Route path={Links.Context} element={<Context />} />
          <Route path={Links.CustomHook} element={<CustomHook />} />
          <Route path={Links.Cart} element={<Cart />} />
          <Route path={Links.Generics} element={<Generics />} />
          <Route path={Links.RestrictProps} element={<RestrictProps />} />
          <Route path={Links.TemplateLiterals} element={<TemplateLiterals />} />
          <Route path={Links.ReactQuery} element={<ReactQuery />}>
            <Route path={RQLinks.TraditionalUsers} element={<Users />} />
            <Route path={RQLinks.RQUsers} element={<RQUsers />} />
            <Route path={RQLinks.RQUser} element={<RQUser />} />
            <Route path={RQLinks.RQParallel} element={<RQParallel />} />
            <Route path={RQLinks.RQDynamicParallel} element={<RQDynamicParallel userIds={[1, 3]} />} />
            <Route path={RQLinks.RQDependentParallel} element={<RQDependentQueries />} />
            <Route path={RQLinks.RQPaginatedParallel} element={<RQPaginatedQueries />} />
            <Route path='' element={<h1>React Query :)</h1>} />
          </Route>
          <Route path='/' element={<h1>JS / React examples By Roni Chabra :)</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
