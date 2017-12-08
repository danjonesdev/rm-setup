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
            <Link className="link  latestArticleList__cont" to={`/Article/${article._id}`}>
              <article key={i} className="col-sm-6  pv3  latestArticleList__col">

                <figure className="rel  pb3">
                  <div className="latestArticleList__img--cont  shadow2-hover">
                    <img className="mb3  latestArticleList__img" alt="" src={article.img} />
                  </div>
                </figure>

                <span className="grey  t8">10/17/09 | {article.author}</span>
                <h2 className="black  t7  pt2  latestArticleList__title">{article.title}</h2>
                <p className="grey  t8  pv2  latestArticleList__intro">{article.description}</p>

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
