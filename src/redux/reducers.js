/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import latestArticles from '../containers/Fragments/LatestArticles/reducer';
import searchArticles from '../containers/Fragments/SearchArticles/reducer';
import articleInfo from '../containers/Pages/ArticleInfo/reducer';

export default combineReducers({
  latestArticles,
  searchArticles,
  articleInfo,
  router,
});
