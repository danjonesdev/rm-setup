/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import latestArticles from '../containers/Fragments/LatestArticles/reducer';
import userInfo from '../containers/Pages/UserInfo/reducer';

export default combineReducers({
  latestArticles,
  userInfo,
  router,
});
