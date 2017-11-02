/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ info }): Element<'div'> => (
  <div>
    <h4>User Card</h4>
    <ul>
      <li>Name: {info.title}</li>
    </ul>
  </div>
);

UserCard.propTypes = {
  info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

UserCard.defaultProps = {
  info: [],
};

export default UserCard;
