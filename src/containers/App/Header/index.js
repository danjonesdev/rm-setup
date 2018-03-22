/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';
// import config from '../../../config';

import { Fb, Tw, Insta } from '../../../components/Elements/Svg';
import SearchInput from '../../../components/SearchInput';

const Header = (): Element<'div'> => (
  <div className="rel  shadow2  z9">
    <header role="banner">
      <Link className="link  latestArticleList__cont" to={'/'}>
        <img className="logo" width="50" src={require('../assets/Rendah-Logo-Small.png')} alt="Logo" role="presentation" />
      </Link>
      <div className="header__social--cont  pr2">
        <SearchInput textAlign="tal" />
        <a className="header__social  ph1  dn-sm" href="https://www.facebook.com/rendahmag/" rel="noopener noreferrer" target="_blank"><Fb /></a>
        <a className="header__social  ph1  dn-sm" href="https://twitter.com/RendahMag" rel="noopener noreferrer" target="_blank"><Tw /></a>
        <a className="header__social  ph1  dn-sm" href="https://www.instagram.com/rendahmag/" rel="noopener noreferrer" target="_blank"><Insta /></a>
      </div>
    </header>
  </div>
);

export default Header;
