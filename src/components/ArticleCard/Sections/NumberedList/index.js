/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class NumberedList extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

NumberedList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

NumberedList.defaultProps = {
  list: [
    '',
  ],
};

export default NumberedList;