/* @flow */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';

import Heading from '../Elements/Heading';

type Props = { list: Array<Object> };

const LatestArticleList = ({ list }: Props): Element<'div'> => (
  <article className="container">
    <div className="row">
      {list.map(article => (
        <div className="col-sm-6">
          <Link className="link" to={`/UserInfo/${article.id}`}>
            <figure>
              <img className="mb3" alt="" src="http://www.billboard.com/files/media/Noisia-Outer-Edges-press-photo-2016-billboard-1240.jpg" />
              <span>New</span>
            </figure>
            <Heading type="h2" color="black" text={article.title} />
          </Link>
          <p className="t8  lh-copy  pb3  LatestArticleList__intro">{article.body['0'].section.content}</p>
        </div>
      ))}
    </div>
  </article>
);

export default LatestArticleList;
