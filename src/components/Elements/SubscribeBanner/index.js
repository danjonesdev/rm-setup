/* eslint-disable react/sort-comp */

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import SubscribeFrom from 'react-mailchimp-subscribe';

// Export this for unit testing more easily
export class SubscribeBanner extends PureComponent {
  renderText = () => {
    const randNum = Math.floor(Math.random() * 4) + 1;
    switch (randNum) {
      case 1:
        return <p className="pt3  white  t5  tac">Subscribe to Rendah for weekly updates</p>;
      case 2:
        return <p className="pt3  white  t5  tac">Fresh Articles, Straight in yo inbox</p>;
      case 3:
        return <p className="pt3  white  t5  tac">Free shit? Probably not... But you should Subscribe anyway</p>;
      case 4:
        return <p className="pt3  white  t5  tac">We ll keep you in the loop, Subscribe maaa man</p>;
      default:
        console.log('Not Returned: SubscribeFrom.renderText');
        return false;
    }
  };

  renderForm = () => {
    const formProps = {
      action: 'https://rendahmag.us17.list-manage.com/subscribe/post?u=df0d549f92845c8dfc4d99dde&amp;id=2904b740be',
      messages: {
        inputPlaceholder: 'Enter yooo email...',
        btnLabel: 'Subscribe',
        sending: 'Subscribing',
        success: 'Subscribed',
        error: 'Oops, no can do...',
      },
      styles: {
        sending: {
          fontSize: 18,
          color: 'white',
        },
        success: {
          fontSize: 18,
          color: 'white',
        },
        error: {
          fontSize: 18,
          color: 'white',
        },
      },
    };

    return <SubscribeFrom {...formProps} />;
  };

  render() {
    return (
      <div className="pt4  pb3  container-fluid  bg-color-a  SubscribeFrom">
        <div className="container">
          {this.renderText()}
          <div className="pb3  container  w-100  SubscribeFrom__form">
            {this.renderForm()}
          </div>
        </div>
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
