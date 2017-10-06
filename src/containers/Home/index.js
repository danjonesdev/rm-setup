/* eslint-disable react/sort-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import * as action from './action';
import UserList from '../../components/UserList';
import styles from './styles.scss';

// Export this for unit testing more easily
export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchUsersIfNeeded();
  }

  renderUserList = () => {
    const { home } = this.props;

    if (
      !home.readyStatus ||
      home.readyStatus === action.USERS_INVALID ||
      home.readyStatus === action.USERS_REQUESTING
    ) {
      return <p>Loading...</p>;
    }

    if (home.readyStatus === action.USERS_FAILURE) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={home.list} />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.renderUserList()}
      </div>
    );
  }
}

const connector = connect(
  ({ home }) => ({ home }),
  dispatch => ({
    fetchUsersIfNeeded: () => dispatch(action.fetchUsersIfNeeded()),
  }),
);

Home.propTypes = {
  home: PropTypes.shape({
    readyStatus: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  fetchUsersIfNeeded: PropTypes.func,
};

Home.defaultProps = {
  home: {
    readyStatus: '',
    list: [{}],
  },
  fetchUsersIfNeeded: () => {},
};

export default connector(Home);
