/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SearchArticles from '../../../containers/Fragments/SearchArticles';
import CategoryGrid from '../../../components/CategoryGrid';

// Export this for unit testing more easily
const Home = ({ match }) => (
  <main>
    <Helmet title="Search" />
    <p className="pt4  black  tac">Latest results for <span className="fw6">{match.params.query}</span></p>
    <SearchArticles match={match} />
    <CategoryGrid />
  </main>
);

Home.propTypes = {
  match: PropTypes.shape(),
};

Home.defaultProps = {
  match: [],
};

export default Home;
