/* @flow */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Player from 'react-soundcloud-player';

// Export this for unit testing more easily
export class Soundcloud extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <Player audio_id={this.props.soundcloudId} title={this.props.title} />
      </div>
    );
  }
}

Soundcloud.propTypes = {
  title: PropTypes.string,
  soundcloudId: PropTypes.string,
};

Soundcloud.defaultProps = {
  title: '',
  soundcloudId: '',
};

export default Soundcloud;
