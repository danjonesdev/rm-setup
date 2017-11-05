/* eslint-disable react/sort-comp */

import React from 'react';
import type { Element } from 'react';
import config from '../../../config';

import { Fb, Tw, Insta, Sc } from '../../../components/Elements/Svg';

const Header = (): Element<'div'> => (
  <div>
    <header role="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-18">
            <img className="h3" src={require('../assets/logo.svg')} alt="Logo" role="presentation" />
            <h1>{config.app.title}</h1>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-24">
                  <Fb />
                  <Tw />
                  <Insta />
                  <Sc />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-24">
                  subscribe to newsletter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
