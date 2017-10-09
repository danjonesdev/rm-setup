/* eslint-disable react/sort-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from './action';
import HotArticleList from '../../../components/HotArticleList';

// Export this for unit testing more easily
export class HotArticles extends PureComponent {
  componentDidMount() {
    this.props.fetchHotArticlesIfNeeded();
  }

  renderHotArticleList = () => {
    const { hotArticles } = this.props;

    if (
      !hotArticles.readyStatus ||
      hotArticles.readyStatus === action.HOTARTICLES_INVALID ||
      hotArticles.readyStatus === action.HOTARTICLES_REQUESTING
    ) {
      return <p>Loading...</p>;
    }

    if (hotArticles.readyStatus === action.HOTARTICLES_FAILURE) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <HotArticleList list={hotArticles.list} />;
  };

  render() {
    return (
      <div>
        {this.renderHotArticleList()}
      </div>
    );
  }
}

const connector = connect(
  ({ hotArticles }) => ({ hotArticles }),
  dispatch => ({
    fetchHotArticlesIfNeeded: () => dispatch(action.fetchHotArticlesIfNeeded()),
  }),
);

HotArticles.propTypes = {
  hotArticles: PropTypes.shape({
    readyStatus: PropTypes.string,
    err: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchHotArticlesIfNeeded: PropTypes.func,
};

HotArticles.defaultProps = {
  hotArticles: {
    readyStatus: '',
    err: '',
    list: [{}],
  },
  fetchHotArticlesIfNeeded: () => {},
};

export default connector(HotArticles);
