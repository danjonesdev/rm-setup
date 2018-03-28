/* eslint-disable max-len, import/no-named-as-default */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Instagram from '../../../components/Instagram';

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
        <div className="container  tal">
          <div className="row">
            <div className="col-xs-14">
              <h1 className="black  title-font  t5  pt5  pv4">Contact</h1>
              <p>Get involved. We&apos;re constantly on the look out for new members of the Rendah team.</p>
              <ul>
                <li className="pv1">Are you a listener and want to start writing articles? - <strong>Get involved</strong></li>
                <li className="pv1">Are you a developer and want to help us code the site/side projects?- <strong>Get involved</strong></li>
                <li className="pv1">Are you an artist and want a Rendah feature/review/interview?- <strong>Get involved</strong></li>
                <li className="pv1">Are you a visual artist and want to promote artwork on the site?- <strong>Get involved</strong></li>
              </ul>
              <p>Even if you&apos;re none of the above and want to get involved, we encourage you to get in touch!</p>
              <p>Please email <a href="mailto:info@rendahmag.com" target="_blank" rel="noopener noreferrer">info@rendahmag.com</a>.</p>
            </div>
            <div className="col-xs-10">
              <div className="container-fluid  pv4">
                <div className="row">
                  <div className="col-sm-24  pt4">
                    <Instagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
