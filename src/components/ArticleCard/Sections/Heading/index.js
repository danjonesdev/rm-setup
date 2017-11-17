/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class Heading extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

Heading.propTypes = {
  text: PropTypes.string,
};

Heading.defaultProps = {
  text: '',
};

export default Heading;
