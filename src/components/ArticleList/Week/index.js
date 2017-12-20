/* eslint-disable import/no-named-as-default,
  react/no-array-index-key,
  jsx-a11y/no-static-element-interactions,
  react/no-array-index-key,
  jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class WeekArticleListLoaded extends PureComponent {
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
      <div className="container  mt4">
        <div className="row">
          {this.props.list.map((article, i) => (
            <div key={i} className="link  w-100  zoom-in-fade-in-iteration--cont">
              <article className={`col-sm-12  col-md-12  tac-sm  pv3  weekArticleList__col--week  ${isLeavingClass}`}>

                <figure className="rel  pb3">
                  <div onClick={() => this.handleClick(article.title, 'article')} className="over-hidden  weekArticleList__img--cont onClick={() => this.handleClick(article._id, 'article')}">
                    <img className="mb3  w-100  zoom-in-fade-in-iteration--item  cp  weekArticleList__img" alt={article.title} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${article.img}`} />
                  </div>
                </figure>
                <div className="abs  weekArticleList__title--cont">
                  <span className="white  bg-black  pv1  pl2  mv2  t8">{article.created} | </span>
                  <span className="white  bg-black  pv1  pr2  mv2  t8  cp  link" onClick={() => this.handleClick(article.author, 'author')}>{article.author}</span>
                  <h2 onClick={() => this.handleClick(article.title, 'article')} className="white  bg-black  pv1  ph2  mv2  t7  pt2  cp  title-font  over-hidden  weekArticleList__title">{article.title}</h2>
                </div>

              </article>
            </div>
          ))}
        </div>
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

WeekArticleListLoaded.propTypes = {
  list: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape(),
};

WeekArticleListLoaded.defaultProps = {
  list: [],
  location: {},
};

export default WeekArticleListLoaded;
