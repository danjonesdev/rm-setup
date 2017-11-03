/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';

// Export this for unit testing more easily
export class UserCard extends PureComponent {
  heading = () => {
    if (this.props.info.title) {
      return (
        <Heading type="h1" color="black" text={this.props.info.title} />
      );
    }
    console.log('Not Returned: UserCard.heading');
    return false;
  };

  section = () => {
    if (this.props.info.title) {
      this.props.info.body.map((section) => {
        console.log('TEST');
        console.log(section);
        return <p>test</p>;
      });
    }
  };

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
