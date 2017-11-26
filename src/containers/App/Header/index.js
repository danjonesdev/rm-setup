/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';
// import config from '../../../config';

import { Fb, Tw, Insta, Sc } from '../../../components/Elements/Svg';
import SearchInput from '../../../components/Helpers/SearchInput';

const Header = (): Element<'div'> => (
  <div className="rel  shadow1  z9">
    <header role="banner">
      <div className="fn  fr-sm   tac  tal-sm  header__social">
        <SearchInput />
        <Fb />
        <Tw />
        <Insta />
        <Sc />
      </div>
    </header>
  </div>
);

export default Header;
