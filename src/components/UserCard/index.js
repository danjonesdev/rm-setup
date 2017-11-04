/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';

// Export this for unit testing more easily
export class UserCard extends PureComponent {
  heading = () => {
    const title = this.props.info.title;

    if (title) {
      return (
        <Heading type="h1" color="black" text={title} />
      );
    }
    console.log('Not Returned: UserCard.heading');
    return false;
  };

  section = () => {
    const body = this.props.info.body;

    if (body) {
      return body.map(item => (
        <p>{item.section.type}</p>
      ));
    }
    console.log('Not Returned: UserCard.heading');
    return false;
  }

  render() {
    return (
      <div>
        {this.heading()}
        {this.section()}
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
