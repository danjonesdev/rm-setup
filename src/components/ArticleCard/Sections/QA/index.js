/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class QA extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <p><em>{this.props.question}</em></p>
        <p>{this.props.answer}</p>
      </div>
    );
  }
}

QA.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

QA.defaultProps = {
  question: '',
  answer: '',
};

export default QA;
