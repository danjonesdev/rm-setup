/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';
import GetImage from '../Helpers/GetImage';

// Export this for unit testing more easily
export class LatestArticleList extends PureComponent {
  render() {
    return (
      <article className="container">
        <div className="row">
          {this.props.list.map((article, i) => (
            <div key={i} className="col-sm-6  pb4">
              <Link className="link" to={`/UserInfo/${article._id}`}>
                <figure className="rel">
                  <img className="mb3  LatestArticleList__img" alt="" src={GetImage(article._id)} />
                  <span className="abs  pv1  ph2  t8  white LatestArticleList__label">New</span>
                </figure>
                <Heading type="h2" color="black" text={article.title} />
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
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

LatestArticleList.defaultProps = {
  list: {},
};

export default LatestArticleList;
