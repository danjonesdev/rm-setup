/* @flow */

import React from 'react';
import type { Element } from 'react';
import Helmet from 'react-helmet';

const NotFound = (): Element<'div'> => (
  <div>
    <Helmet title="Oops" />
    <p>Oops, Page was not found!</p>
  </div>
);

export default NotFound;
