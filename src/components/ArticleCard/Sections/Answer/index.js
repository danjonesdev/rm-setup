/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class Answer extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <p><em className="font-normal-a  dark-grey">{this.props.text}</em></p>
      </div>
    );
  }
}

Answer.propTypes = {
  text: PropTypes.string,
};

Answer.defaultProps = {
  text: '',
};

export default Answer;