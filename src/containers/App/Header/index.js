/* eslint-disable react/sort-comp */

import React from 'react';
import type { Element } from 'react';

import { Fb } from '../../../components/Elements/Svg';

console.log(this.props);

const Header = (): Element<'div'> => (
  <header role="banner">
    <img className="h3" src={require('../assets/logo.svg')} alt="Logo" role="presentation" />
    <h1>App</h1>
    <Fb />
  </header>
);

export default Header;
