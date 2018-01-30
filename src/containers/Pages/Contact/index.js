/* eslint-disable max-len */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

export class Contact extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="page-fade-in">
        <Helmet title="Contact" />
        <div className="container  tac">
          <div className="row">
            <div className="col-xs-24">
              <h1 className="mt4  mb3">Contact</h1>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
