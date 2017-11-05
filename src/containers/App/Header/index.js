/* eslint-disable react/sort-comp */

import React from 'react';
import type { Element } from 'react';
import config from '../../../config';

import { Fb, Tw, Insta, Sc } from '../../../components/Elements/Svg';

const Header = (): Element<'div'> => (
  <div>
    <header role="banner">
      <img className="h3" src={require('../assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
      <Fb />
      <Tw />
      <Insta />
      <Sc />
    </header>
  </div>
);

export default Header;
