/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from './action';
import LatestArticleList from '../../../components/LatestArticleList';

// Export this for unit testing more easily
export class SearchArticles extends PureComponent {
  componentDidMount() {
    const query = this.props.match.params.query;
    this.props.fetchSearchArticlesIfNeeded(query);
  }

  renderSearchArticleList = () => {
    const { searchArticles } = this.props;

    if (
      !searchArticles.readyStatus ||
      searchArticles.readyStatus === action.SEARCHARTICLES_INVALID ||
      searchArticles.readyStatus === action.SEARCHARTICLES_REQUESTING
    ) {
      return <p>Loading...</p>;
    }

    if (searchArticles.readyStatus === action.SEARCHARTICLES_FAILURE) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <LatestArticleList list={searchArticles.list} />;
  };

  render() {
    return (
      <div>
        {this.renderSearchArticleList()}
      </div>
    );
  }
}

const connector = connect(
  ({ searchArticles }) => ({ searchArticles }),
  dispatch => ({
    fetchSearchArticlesIfNeeded: (query: string) =>
      dispatch(action.fetchSearchArticlesIfNeeded(query)),
  }),
);

SearchArticles.propTypes = {
  searchArticles: PropTypes.shape({
    readyStatus: PropTypes.string,
    err: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.shape(),
  fetchSearchArticlesIfNeeded: PropTypes.func,
};

SearchArticles.defaultProps = {
  searchArticles: {
    readyStatus: '',
    err: '',
    list: [{}],
  },
  match: [],
  fetchSearchArticlesIfNeeded: () => {},
};

export default connector(SearchArticles);
