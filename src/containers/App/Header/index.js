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
          <div className="col-sm-16">
            <img className="h3" src={require('../assets/logo.svg')} alt={config.app.title} role="presentation" />
            <h1 className="hidden">{config.app.title}</h1>
          </div>
          <div className="col-sm-8">
            <div className="fn  fr-sm   tac  tal-sm  header__social">
              <Fb />
              <Tw />
              <Insta />
              <Sc />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
