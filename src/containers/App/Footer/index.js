/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React, { PureComponent } from 'react';
import Instafeed from 'react-instafeed';

export class Footer extends PureComponent {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <footer className="container-fluid  rel  bt  bw1  z9">
        <div className="row">
          <div className="col-sm-12">
            test
          </div>
          <div className="col-sm-12">
            <div id="instaFeed" className="container  mv3">
              <Instafeed
                limit="3"
                resolution="standard_resolution"
                sortBy="most-recent"
                target="instaFeed"
                template=""
                userId="6646546960"
                clientId="1375f42790124e1ba319055cd4f93ec5"
                accessToken="6646546960.1677ed0.8eb1d2cceba64706aed91890d352c904"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
