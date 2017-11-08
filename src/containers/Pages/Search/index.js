/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SearchArticles from '../../../containers/Fragments/SearchArticles';

// Export this for unit testing more easily
const Home = ({ match }) => (
  <main>
    <Helmet title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <SearchArticles match={match} />
        </div>
      </div>
    </div>
  </main>
);

Home.propTypes = {
  match: PropTypes.shape(),
};

Home.defaultProps = {
  match: [],
};

export default Home;
