/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../../Elements/Heading';
// import GetImage from '../../Helpers/GetImage';

// Export this for unit testing more easily
export class SearchArticleList extends PureComponent {
  render() {
    return (
      <article>
        <div className="row">
          {this.props.list.map((article, i) => (
            <Link className="link" to={`/Article/${article._id}`}>
              <div key={i} className="col-sm-24  pb4">
                <div className="row">
                  <div className="col-sm-12">
                    <figure className="rel">
                      <span className="abs  pv1  ph2  t8  white searchArticleList__label">Latest</span>
                      <img className="mb3  searchArticleList__img" alt="" src={article.img} />
                    </figure>
                  </div>
                  <div className="col-sm-12">
                    <span className="grey  t8">10/17/09</span>
                    <Heading type="h2" color="black" text={article.title} />
                    <p className="t8  lh-copy  pb3  searchArticleList__intro">{article.body['0'].section.content}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </article>
    );
  }
}

SearchArticleList.propTypes = {
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

SearchArticleList.defaultProps = {
  list: {},
};

export default SearchArticleList;
