/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';

type Props = { list: Array<Object> };

const LatestArticleList = ({ list }: Props): Element<'div'> => (
  <div className="container">
    <div className="row">
      {list.map(user => (
        <div className="col-sm-6">
          <img alt='' src="http://www.billboard.com/files/media/Noisia-Outer-Edges-press-photo-2016-billboard-1240.jpg" />
          <Link to={`/UserInfo/${user.id}`}>{user.title}</Link>
        </div>
      ))}
    </div>
  </div>
);

export default LatestArticleList;
