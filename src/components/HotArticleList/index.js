/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';

type Props = { list: Array<Object> };

const HotArticleList = ({ list }: Props): Element<'div'> => (
  <div className="container">
    <div className="row">
      {list.map(user => (
        <div className="col-sm-6">
          <Link to={`/UserInfo/${user.id}`}>{user.title}</Link>
        </div>
      ))}
    </div>
  </div>
);

export default HotArticleList;
