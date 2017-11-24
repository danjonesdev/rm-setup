/* eslint-disable react/sort-comp */

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import SubscribeFrom from 'react-mailchimp-subscribe';

// Export this for unit testing more easily
export class SubscribeBanner extends PureComponent {
  renderForm = () => {
    const formProps = {
      action: 'https://prizoners.us9.list-manage.com/subscribe/post?u=d66d8c5d1ef09114cf8c27ccb&id=3c7edc9b14',
      messages: {
        inputPlaceholder: 'Enter yooo email...',
        btnLabel: 'Subscribe',
        sending: 'Subscribing',
        success: 'Subscribed',
        error: 'Oops, no can do...',
      },
      // styles: {
      //   sending: {
      //     fontSize: 18,
      //     color: 'auto',
      //   },
      //   success: {
      //     fontSize: 18,
      //     color: 'auto',
      //   },
      //   error: {
      //     fontSize: 18,
      //     color: 'auto',
      //   },
      // },
    };

    return <SubscribeFrom {...formProps} />;
  };

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

// SubscribeBanner.propTypes = {
//   type: PropTypes.string,
//   color: PropTypes.string,
//   text: PropTypes.string,
// };
//
// SubscribeBanner.defaultProps = {
//   type: '',
//   color: '',
//   text: '',
// };

export default SubscribeBanner;
