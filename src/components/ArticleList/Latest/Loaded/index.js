/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class LatestArticleListLoaded extends PureComponent {
  render() {
    return (
      <div className="container  mv4">
        <div className="row">
          {this.props.list.map((article, i) => (
            <Link className="link  latestArticleList__col--cont" to={`/Article/${article._id}`}>
              <article key={i} className="col-sm-6  pv3  latestArticleList__col">
                <figure className="rel">
                  <img className="mb3  latestArticleList__img" alt="" src={article.img} />
                </figure>
                <span className="grey  t8  lh-solid">10/17/09</span>
                <h2 className="t8  pv2  black  latestArticleList__title">{article.title}</h2>
                <p className="t8  pv2  font-normal-a  dark-grey  latestArticleList__intro">{article.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

LatestArticleListLoaded.propTypes = {
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

LatestArticleListLoaded.defaultProps = {
  list: [],
};

export default LatestArticleListLoaded;
