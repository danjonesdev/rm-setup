/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';

// Export this for unit testing more easily
export class UserCard extends PureComponent {
  heading = () => {
    const info = this.props.info;

    if (info.title) {
      return (
        <Heading type="h1" color="black" text={info.title} />
      );
    }
    console.log('Not Returned: UserCard.heading');
    return false;
  };

  render() {
    return (
      <div>
        {this.heading()}
      </div>
    );
  }
}

UserCard.propTypes = {
  info: PropTypes.shape(),
};

UserCard.defaultProps = {
  info: {},
};

export default UserCard;
