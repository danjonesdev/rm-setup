/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AuthorInfo from '../../../containers/Fragments/AuthorInfo';
import AuthorArticles from '../../../containers/Fragments/AuthorArticles';

// Export this for unit testing more easily
export class Author extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <AuthorInfo match={this.props.match} />
        <h2 className="tac  mb4">Latest from this Author</h2>
        <AuthorArticles match={this.props.match} />
      </main>
    );
  }
}

Author.propTypes = {
  match: PropTypes.shape(),
};

Author.defaultProps = {
  match: [],
};

export default Author;
