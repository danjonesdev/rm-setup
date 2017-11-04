/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../../../Elements/Heading';

// Export this for unit testing more easily
export class Standard extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <Heading type="h2" color="black" text={this.props.title} />
        <p>{this.props.img}</p>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

Standard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
};

Standard.defaultProps = {
  title: '',
  img: '',
  content: '',
};

export default Standard;
