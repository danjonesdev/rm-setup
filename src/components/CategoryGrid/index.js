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
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/categories/artists.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  bg-black  pv1  CategoryGrid__title">Artists</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/DJs'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/categories/djs.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  bg-black  pv1  CategoryGrid__title">DJs</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Mixes'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/categories/mixes.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  bg-black  pv1  CategoryGrid__title">Mixes</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Releases'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/categories/releases.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  bg-black  pv1  CategoryGrid__title">Releases</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Events'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/categories/events.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  bg-black  pv1  CategoryGrid__title">Events</h4>
                </div>
              </Link>
            </div>
            <div className="col-sm-12  col-md-8">
              <Link className="link" to={'/Category/Visuals'}>
                <div className="mv3  shadow2  CategoryGrid__bg" style={{ backgroundImage: 'url(https://res.cloudinary.com/dzz8ji5lj/image/upload/categories/visuals.jpg)' }}>
                  <h4 className="rel  tac  white  t5  title-font  bg-black  pv1  CategoryGrid__title">Visuals</h4>
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
