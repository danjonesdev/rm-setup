/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import YouTube from 'react-youtube';

// Export this for unit testing more easily
export class Link extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <YouTube className="center  tac  db" videoId={this.props.videoId} />
      </div>
    );
  }
}

Link.propTypes = {
  videoId: PropTypes.string,
};

Link.defaultProps = {
  videoId: '',
};

export default Link;
