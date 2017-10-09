/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import hotArticles from '../containers/Fragments/HotArticles/reducer';
import userInfo from '../containers/Pages/UserInfo/reducer';

export default combineReducers({
  hotArticles,
  userInfo,
  router,
});
