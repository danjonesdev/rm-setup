/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import LatestArticles from '../../../containers/Fragments/LatestArticles';
import Heading from '../../../components/Elements/Heading';

// Export this for unit testing more easily
const Home = () => (
  <div>
    <Helmet title="Home" />
    <Heading type="h1" color="red" text="Featured" />
    <LatestArticles />
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
