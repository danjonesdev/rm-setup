/* eslint-disable import/no-named-as-default,
  react/no-array-index-key,
  jsx-a11y/no-static-element-interactions,
  react/no-array-index-key,
  jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class SearchArticleList extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireArticleRedirect: false,
      fireAuthorRedirect: false,
      articleTitle: null,
      authorName: null,
      isLeaving: false,
    };
  }

  handleClick = (attr, type) => {
    if (type === 'article') {
      this.setState({ isLeaving: true });
      setTimeout(() => {
        this.setState({ articleTitle: attr.replace(/\s+/g, '-') });
        this.setState({ fireArticleRedirect: true });
      }, 200);
    }
    if (type === 'author') {
      this.setState({ isLeaving: true });
      setTimeout(() => {
        this.setState({ authorName: attr.replace(/\s+/g, '-') });
        this.setState({ fireAuthorRedirect: true });
      }, 200);
    }
  }

  render() {
    const isLeavingClass = classNames({ 'fade-out': this.state.isLeaving });
    const { from } = this.props.location.state || '/';
    const fireArticleRedirect = this.state.fireArticleRedirect;
    const fireAuthorRedirect = this.state.fireAuthorRedirect;

    return (
      <div className="container  mv5">
        {this.props.list.map((article, i) => (
          <div className="row">
            <div className="col-sm-4" />
            <div key={i} className="link  w-100  zoom-in-fade-in-iteration--cont">
              <article className={`col-sm-16  tac-sm  pv3  latestArticleList__col--search  ${isLeavingClass}`}>

                <div className="row">
                  <div className="col-sm-12">
                    <figure className="rel  pb3">
                      <div onClick={() => this.handleClick(article.title, 'article')} className="latestArticleList__img--cont onClick={() => this.handleClick(article._id, 'article')}">
                        <img className="mb3  w-100  zoom-in-fade-in-iteration--item  cp  latestArticleList__img" alt={article.title} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${article.img}`} />
                      </div>
                    </figure>
                  </div>
                  <div className="col-sm-12">
                    <span className="grey  t8"><time dateTime="10/17/09">10/17/09</time> | </span>
                    <span className="grey  t8  cp  link" onClick={() => this.handleClick(article.author, 'author')}>{article.author}</span>
                    <h2 onClick={() => this.handleClick(article.title, 'article')} className="black  t7  pt2  cp  latestArticleList__title">{article.title}</h2>
                    <p className="grey  t8  pv2  latestArticleList__intro">{article.description}</p>
                  </div>
                </div>

              </article>
            </div>
            <div className="col-sm-4" />
          </div>
        ))}
        {fireArticleRedirect ? (
          <Redirect push to={from || `/Article/${this.state.articleTitle}`} />
        ) : (
          false
        )}
        {fireAuthorRedirect ? (
          <Redirect push to={from || `/Author/${this.state.authorName}`} />
        ) : (
          false
        )}
      </div>
    );
  }
}

SearchArticleList.propTypes = {
  list: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape(),
};

SearchArticleList.defaultProps = {
  list: [],
  location: {},
};

export default SearchArticleList;
