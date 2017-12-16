/* eslint-disable import/no-named-as-default,
  react/no-array-index-key,
  jsx-a11y/no-static-element-interactions,
  react/no-array-index-key,
  jsx-a11y/no-noninteractive-element-interactions */

import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class AuthorList extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      authorName: null,
      isLeaving: false,
    };
  }

  handleClick = (name) => {
    this.setState({ isLeaving: true });
    setTimeout(() => {
      this.setState({ authorName: name });
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
          {this.props.list.map((author, i) => (
            <div key={i} className="link  w-100  latestAuthorList__cont">
              <div className={`col-sm-12  col-md-6  pv3  latestArticleList__col--latest  ${isLeavingClass}`}>

                <figure className="rel  pb3">
                  <div onClick={() => this.handleClick(author.name)} className="latestArticleList__img--cont">
                    <img className="mb3  center  br-100  w5  latestArticleList__img" alt={author.name} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${author.img}`} />
                  </div>
                </figure>
                <h2 onClick={() => this.handleClick(author.name)} className="black  t7  pt2  tac  latestArticleList__title">{author.name}</h2>

              </div>
            </div>
          ))}
        </div>
        {fireRedirect ? (
          <Redirect push to={from || `/Author/${this.state.authorName}`} />
        ) : (
          false
        )}
      </div>
    );
  }
}

AuthorList.propTypes = {
  list: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.shape(),
};

AuthorList.defaultProps = {
  list: [],
  location: {},
};

export default AuthorList;
