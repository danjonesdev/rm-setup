/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';
// import config from '../../../config';

import { Fb, Tw, Insta, Sc } from '../../../components/Elements/Svg';
// import SearchInput from '../../../components/Helpers/SearchInput';

const Header = (): Element<'div'> => (
  <div className="rel  bb  bw1  z9">
    <header role="banner">
      <div className="dn-sm  header__social--cont  pr2">
        <a className="header__social  ph1" href="/"><Fb /></a>
        <a className="header__social  ph1" href="/"><Tw /></a>
        <a className="header__social  ph1" href="/"><Insta /></a>
        <a className="header__social  ph1" href="/"><Sc /></a>
      </div>
    </header>
  </div>
);

export default Header;
