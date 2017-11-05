/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';
import { Fb } from '../Elements/Svg';
import GetImage from '../Helpers/GetImage';

// Export this for unit testing more easily
export class LatestArticleList extends PureComponent {
  render() {
    return (
      <article className="container">
        <div className="row">
          {this.props.list.map((article, i) => (
            <div key={i} className="col-sm-6">
              <Link className="link" to={`/UserInfo/${article._id}`}>
                <figure>
                  <img className="mb3" alt="" src={GetImage(article._id)} />
                  <span>New</span>
                </figure>
                <Heading type="h2" color="black" text={article.title} />
                <Fb text="svg" />
              </Link>
              <p className="t8  lh-copy  pb3  LatestArticleList__intro">{article.body['0'].section.content}</p>
            </div>
          ))}
        </div>
      </article>
    );
  }
}

LatestArticleList.propTypes = {
  list: PropTypes.shape(),
};

LatestArticleList.defaultProps = {
  list: {},
};

export default LatestArticleList;
