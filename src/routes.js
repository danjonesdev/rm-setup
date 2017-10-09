/* @flow */

import type { Dispatch } from './types';
import { fetchHotArticlesIfNeeded } from './containers/Fragments/HotArticles/action';
import { fetchUserIfNeeded } from './containers/Pages/UserInfo/action';
import HomePage from './containers/Pages/Home';
import UserInfoPage from './containers/Pages/UserInfo';
import NotFoundPage from './containers/Pages/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchHotArticlesIfNeeded()), // Register your server-side call action(s) here
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
