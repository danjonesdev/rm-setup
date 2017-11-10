/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../../Elements/Heading';
import GetImage from '../../Helpers/GetImage';

// Export this for unit testing more easily
export class LatestArticleList extends PureComponent {
  render() {
    return (
      <article className="container">
        <div className="row">
          {this.props.list.map((article, i) => (
            <Link className="link" to={`/UserInfo/${article._id}`}>
              <div key={i} className="col-sm-6  pb4">
                <figure className="rel">
                  <span className="abs  pv1  ph2  t8  white latestArticleList__label">Latest</span>
                  <img className="mb3  latestArticleList__img" alt="" src={GetImage(article._id)} />
                </figure>
                <span className="grey  t8">10/17/09</span>
                <Heading type="h2" color="black" text={article.title} />
                <p className="t8  lh-copy  pb3  latestArticleList__intro">{article.body['0'].section.content}</p>
              </div>
            </Link>
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
