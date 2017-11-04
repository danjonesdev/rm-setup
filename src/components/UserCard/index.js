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

  sections = (item) => {
    if (item) {
      switch (item.section.type) {
        case 'standard':
          return (
            <p>{item.section.type}</p>
          );
        case 'questions':
          return (
            <p>{item.section.type}</p>
          );
        case 'ul':
          return (
            <p>{item.section.type}</p>
          );
        case 'ol':
          return (
            <p>{item.section.type}</p>
          );
        case 'soundcloud':
          return (
            <p>{item.section.type}</p>
          );
        case 'youtube':
          return (
            <p>{item.section.type}</p>
          );
        default:
          console.log('Not Returned: UserCard.section.switch');
          return false;
      }
    }
    console.log('Not Returned: UserCard.sections');
    return false;
  }

  render() {
    const sections = this.sections;
    return (
      <div>
        {this.heading()}
        {this.props.info.body.map(item => (
          sections(item)
        ))}
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
