/* @flow */

import type { Dispatch } from './types';
import { fetchLatestArticlesIfNeeded } from './containers/Fragments/LatestArticles/action';
import { fetchSearchArticlesIfNeeded } from './containers/Fragments/SearchArticles/action';
import { fetchUserIfNeeded } from './containers/Pages/UserInfo/action';
import HomePage from './containers/Pages/Home';
import SearchPage from './containers/Pages/Search';
import UserInfoPage from './containers/Pages/UserInfo';
import NotFoundPage from './containers/Pages/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchLatestArticlesIfNeeded()), // Register your server-side call action(s) here
    ]),
  },
  {
    path: '/Search/:query',
    component: SearchPage,
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchSearchArticlesIfNeeded(params.query)),
    ]),
  },
  {
    path: '/UserInfo/:id',
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchUserIfNeeded(params.id)),
    ]),
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
