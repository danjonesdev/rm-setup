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
        {this.props.list.map((article, i) => (
          <div className="row">
            <div className="col-sm-4" />
            <div key={i} className="link  latestArticleList__cont">
              <article className={`col-sm-16  tac-sm  pv3  latestArticleList__col--search  ${isLeavingClass}`}>

                <div className="row">
                  <div className="col-sm-12">
                    <figure className="rel  pb3">
                      <div onClick={() => this.handleClick(article._id)} className="latestArticleList__img--cont onClick={() => this.handleClick(article._id)}">
                        <img className="mb3  latestArticleList__img" alt={article.title} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${article.img}`} />
                      </div>
                    </figure>
                  </div>
                  <div className="col-sm-12">
                    <span className="grey  t8"><time dateTime="10/17/09">10/17/09</time> | {article.author}</span>
                    <h2 onClick={() => this.handleClick(article._id)} className="black  t7  pt2  latestArticleList__title">{article.title}</h2>
                    <p className="grey  t8  pv2  latestArticleList__intro">{article.description}</p>
                  </div>
                </div>

              </article>
            </div>
            <div className="col-sm-4" />
          </div>
        ))}
        {fireRedirect ? (
          <Redirect push to={from || `/Article/${this.state.articleId}`} />
        ) : (
          false
        )}
      </div>
    );
  }
}

SearchArticleList.propTypes = {
  list: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape(),
};

SearchArticleList.defaultProps = {
  list: [],
  location: {},
};

export default SearchArticleList;
