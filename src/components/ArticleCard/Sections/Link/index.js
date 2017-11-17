/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class Link extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.url}</p>
      </div>
    );
  }
}

Link.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
};

Link.defaultProps = {
  text: '',
  url: '',
};

export default Link;
