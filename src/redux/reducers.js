/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import hotArticles from '../containers/HotArticles/reducer';
import userInfo from '../containers/UserInfo/reducer';

export default combineReducers({
  hotArticles,
  userInfo,
  router,
});
