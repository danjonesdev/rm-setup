/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';
// import config from '../../../config';

import { Fb, Tw, Insta, Sc } from '../../../components/Elements/Svg';
import SearchInput from '../../../components/Helpers/SearchInput';

const Header = (): Element<'div'> => (
  <div className="rel  bb  bw1  z9">
    <header role="banner">
      <a href="/">
        <img className="logo" width="50" src={require('../assets/Rendah-Logo-Medium.png')} alt="Logo" role="presentation" />
      </a>
      <div className="header__social--cont  pr2">
        <SearchInput />
        <a className="header__social  ph1  dn-sm" href="/"><Fb /></a>
        <a className="header__social  ph1  dn-sm" href="/"><Tw /></a>
        <a className="header__social  ph1  dn-sm" href="/"><Insta /></a>
        <a className="header__social  ph1  dn-sm" href="/"><Sc /></a>
      </div>
    </header>
  </div>
);

export default Header;
