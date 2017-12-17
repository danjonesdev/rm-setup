/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import CategoryArticles from '../../../containers/Fragments/CategoryArticles';

// Export this for unit testing more easily
const Category = ({ match }) => (
  <main>
    <Helmet title="Category" />
    <CategoryArticles match={match} />
  </main>
);

Category.propTypes = {
  match: PropTypes.shape(),
};

Category.defaultProps = {
  match: [],
};

export default Category;
