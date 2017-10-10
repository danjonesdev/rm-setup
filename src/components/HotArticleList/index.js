/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

type Props = { list: Array<Object> };

const HotArticleList = ({ list }: Props): Element<'div'> => (
  <div className={styles.HotArticleList}>
    <h4>User List</h4>
    <ul>
      {list.map(user => (
        <li key={user.id}>
          <Link to={`/UserInfo/${user.id}`}>{user.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HotArticleList;
