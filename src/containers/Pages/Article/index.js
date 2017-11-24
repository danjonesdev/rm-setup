/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArticleInfo from '../../../containers/Fragments/ArticleInfo';
import ExtraArticles from '../../../containers/Fragments/ExtraArticles';

// Export this for unit testing more easily
export class Article extends PureComponent {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <ArticleInfo match={this.props.match} />
        <ExtraArticles />
      </main>
    );
  }
}

Article.propTypes = {
  match: PropTypes.shape(),
};

Article.defaultProps = {
  match: [],
};

export default Article;
