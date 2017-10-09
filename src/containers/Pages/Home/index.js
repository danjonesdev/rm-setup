/* eslint-disable react/sort-comp */

import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import HotArticlesz from '../../../containers/Fragments/HotArticles';
import styles from './styles.scss';

// Export this for unit testing more easily
const Home = () => (
  <div className={styles.Home}>
    <Helmet title="Home" />
    <HotArticlesz />
  </div>
);

// Home.propTypes = {
//   home: PropTypes.shape({
//     readyStatus: PropTypes.string,
//     err: PropTypes.any,
//     list: PropTypes.arrayOf(PropTypes.object),
//   }),
//   fetchUsersIfNeeded: PropTypes.func,
// };
//
// Home.defaultProps = {
//   home: {
//     readyStatus: '',
//     err: '',
//     list: [{}],
//   },
//   fetchUsersIfNeeded: () => {},
// };

export default Home;
