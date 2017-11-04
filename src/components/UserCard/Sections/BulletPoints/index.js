/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class BulletPoints extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <ol>
          {this.props.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}

BulletPoints.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

BulletPoints.defaultProps = {
  list: [
    '',
  ],
};

export default BulletPoints;
