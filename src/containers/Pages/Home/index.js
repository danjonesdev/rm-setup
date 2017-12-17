/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import LatestArticles from '../../../containers/Fragments/LatestArticles';
import CategoryGrid from '../../../components/CategoryGrid';
import SearchInput from '../../../components/SearchInput';

// Export this for unit testing more easily
const Home = () => (
  <main>
    <Helmet title="Home" />
    <LatestArticles />
    <CategoryGrid />
    <p className="pt4  t6  black  tac  title-font">Search the site for more</p>
    <div className="pt1  pb4"><SearchInput /></div>
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
