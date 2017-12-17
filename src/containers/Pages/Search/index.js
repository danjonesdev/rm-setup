/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SearchArticles from '../../../containers/Fragments/SearchArticles';

// Export this for unit testing more easily
const Home = ({ match }) => (
  <main>
    <Helmet title="Search" />
    <SearchArticles match={match} />
  </main>
);

Home.propTypes = {
  match: PropTypes.shape(),
};

Home.defaultProps = {
  match: [],
};

export default Home;
