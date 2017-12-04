/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';

const Nav = (): Element<'div'> => (
  <nav className="bg-black  tac  pt4">
    <ul>
      <li>
        <a className="white  dib  pb2  t5  link" href="/">Home</a>
      </li>
      <li>
        <a className="white  dib  pb2  t5  link" href="/">Latest News</a>
      </li>
      <li>
        <a className="white  dib  pb2  t5  link" href="/">What We Do</a>
      </li>
      <li>
        <a className="white  dib  pb2  t5  link" href="/">Another Link</a>
      </li>
      <li>
        <a className="white  dib  pb2  t5  link" href="/">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
