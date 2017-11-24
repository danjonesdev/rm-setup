/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */


import React from 'react';
import PropTypes from 'prop-types';

import ArticleInfo from '../../../containers/Fragments/ArticleInfo';

// Export this for unit testing more easily
const Article = ({ match }) => (
  <main>
    <ArticleInfo match={match} />
  </main>
);

Article.propTypes = {
  match: PropTypes.shape(),
};

Article.defaultProps = {
  match: [],
};

export default Article;
