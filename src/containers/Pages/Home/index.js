/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import LatestArticles from '../../../containers/Fragments/LatestArticles';

// Export this for unit testing more easily
const Home = () => (
  <main>
    <Helmet title="Home" />
    <LatestArticles />
  </main>

);

// Home.propTypes = {
//   home: PropTypes.shape({
//     readyStatus: PropTypes.string,
//     err: PropTypes.any,
//     list: PropTypes.arrayOf(PropTypes.object),
//   }),
//   fetchArticlesIfNeeded: PropTypes.func,
// };
//
// Home.defaultProps = {
//   home: {
//     readyStatus: '',
//     err: '',
//     list: [{}],
//   },
//   fetchArticlesIfNeeded: () => {},
// };

export default Home;
