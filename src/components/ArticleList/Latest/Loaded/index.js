/* eslint-disable import/no-named-as-default,
  react/no-array-index-key,
  jsx-a11y/no-static-element-interactions,
  react/no-array-index-key,
  jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class LatestArticleListLoaded extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      articleId: null,
      isLeaving: false,
    };
  }

  handleClick = (id) => {
    this.setState({ isLeaving: true });
    setTimeout(() => {
      this.setState({ articleId: id });
      this.setState({ fireRedirect: true });
    }, 200);
  }

  render() {
    const isLeavingClass = classNames({ 'latestArticleList__col--leaving': this.state.isLeaving });
    const { from } = this.props.location.state || '/';
    const fireRedirect = this.state.fireRedirect;

    return (
      <div className="container  mv4">
        <div className="row">
          {this.props.list.map((article, i) => (
            <div key={i} className="link  latestArticleList__cont">
              <article className={`col-sm-6  pv3  latestArticleList__col  ${isLeavingClass}`}>

                <figure className="rel  pb3">
                  <div className="latestArticleList__img--cont">
                    <img onClick={() => this.handleClick(article._id)} className="mb3  latestArticleList__img" alt="" src={article.img} />
                  </div>
                </figure>

                <span className="grey  t8">10/17/09 | {article.author}</span>
                <h2 onClick={() => this.handleClick(article._id)} className="black  t7  pt2  latestArticleList__title">{article.title}</h2>
                <p className="grey  t8  pv2  latestArticleList__intro">{article.description}</p>

              </article>
            </div>
          ))}
        </div>
        {fireRedirect ? (
          <Redirect push to={from || `/Article/${this.state.articleId}`} />
        ) : (
          false
        )}
      </div>
    );
  }
}

LatestArticleListLoaded.propTypes = {
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape(),
};

LatestArticleListLoaded.defaultProps = {
  list: [],
  location: {},
};

export default LatestArticleListLoaded;
