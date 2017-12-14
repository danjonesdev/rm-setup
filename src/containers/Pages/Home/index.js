/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Instafeed from 'react-instafeed';

import LatestArticles from '../../../containers/Fragments/LatestArticles';
import SubscribeBanner from '../../../components/SubscribeBanner';
import ExtraArticles from '../../../containers/Fragments/ExtraArticles';

// Export this for unit testing more easily
const Home = () => (
  <main>
    <Helmet title="Home" />
    <LatestArticles />
    <SubscribeBanner />
    <h2 className="tac  mb4">Insta Feed</h2>
    <div id="instaFeed" className="container  mb4">
      <Instafeed
        limit="12"
        resolution="standard_resolution"
        sortBy="most-recent"
        target="instaFeed"
        template=""
        userId="6646546960"
        clientId="1375f42790124e1ba319055cd4f93ec5"
        accessToken="6646546960.1677ed0.8eb1d2cceba64706aed91890d352c904"
      />
    </div>
    <h2 className="tac  mb4">More articles</h2>
    <ExtraArticles />
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
