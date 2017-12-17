/* @flow */
/* eslint-disable import/no-named-as-default, react/prefer-stateless-function */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Export this for unit testing more easily
export class CategoryGrid extends PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Artists'}>
                <div className="mv3  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_contrast:-100,o_100/articles/es-0909-981683-962153-back.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  CategoryGrid__title">Artists</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/DJs'}>
                <div className="mv3  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_contrast:-100,o_100/articles/es-0909-981683-962153-back.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  CategoryGrid__title">DJs</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Mixes'}>
                <div className="mv3  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_contrast:-100,o_100/e_brightness:-40,o_100/articles/How-to-secure-DJ-gig.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  CategoryGrid__title">Mixes</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Releases'}>
                <div className="mv3  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_contrast:-100,o_100/e_brightness:-40,o_100/articles/How-to-secure-DJ-gig.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  CategoryGrid__title">Releases</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Events'}>
                <div className="mv3  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_contrast:-100,o_100/e_brightness:-40,o_100/articles/How-to-secure-DJ-gig.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  CategoryGrid__title">Events</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Tracks'}>
                <div className="mv3  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_contrast:-100,o_100/e_brightness:-40,o_100/articles/How-to-secure-DJ-gig.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  CategoryGrid__title">Tracks</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryGrid;
