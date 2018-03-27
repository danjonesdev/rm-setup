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
      <div className="rel  bt  bw1  z9  pv2  footer">
        <footer className="container  footer">
          <div className="row">
            <div className="col-md-12">
              <p className="pt2  mt1">Rendah Mag 2018</p>
            </div>
            <div className="col-md-12  ph6-md  mv2-md">
              <div className="row">
                <div id="instaFeed" className="container  db  dn-md">
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
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
