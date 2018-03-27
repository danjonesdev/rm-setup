/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';

export class Footer extends React.Component {
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
            ...
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
