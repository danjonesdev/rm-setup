/* @flow */

import type { Dispatch } from './types';
import { fetchLatestArticlesIfNeeded } from './containers/Fragments/LatestArticles/action';
import { fetchExtraArticlesIfNeeded } from './containers/Fragments/ExtraArticles/action';
import { fetchSearchArticlesIfNeeded } from './containers/Fragments/SearchArticles/action';
import { fetchArticleIfNeeded } from './containers/Fragments/ArticleInfo/action';
import { fetchAuthorIfNeeded } from './containers/Fragments/AuthorInfo/action';
import { fetchAuthorsIfNeeded } from './containers/Fragments/Authors/action';
import HomePage from './containers/Pages/Home';
import SearchPage from './containers/Pages/Search';
import ArticlePage from './containers/Pages/Article';
import AuthorPage from './containers/Pages/Author';
import NotFoundPage from './containers/Pages/NotFound';
import AuthorsPage from './containers/Pages/Authors';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchLatestArticlesIfNeeded()),
      dispatch(fetchExtraArticlesIfNeeded()), // Register your server-side call action(s) here
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
    path: '/Article/:id',
    component: ArticlePage,
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchArticleIfNeeded(params.id)),
    ]),
  },
  {
    path: '/Author/:id',
    component: AuthorPage,
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchAuthorIfNeeded(params.id)),
    ]),
  },
  {
    path: '/Authors',
    component: AuthorsPage,
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchAuthorsIfNeeded()),
    ]),
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
