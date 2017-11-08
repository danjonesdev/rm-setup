/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';
import config from '../../../config';

import { Fb, Tw, Insta, Sc } from '../../../components/Elements/Svg';
import SearchInput from '../../../components/Helpers/SearchInput';

const Header = (): Element<'div'> => (
  <div>
    <header role="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <img className="h3" src={require('../assets/logo.svg')} alt={config.app.title} role="presentation" />
            <h1 className="hidden">{config.app.title}</h1>
          </div>
          <div className="col-sm-12">
            <div className="fn  fr-sm   tac  tal-sm  header__social">
              <SearchInput />
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
