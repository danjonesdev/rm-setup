/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp,
jsx-a11y/no-static-element-interactions */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';

// import GetImage from '../Helpers/GetImage';

// import Standard from './Sections/Standard';
// import QA from './Sections/QA';
import Heading from './Sections/Heading';
import Paragraph from './Sections/Paragraph';
import Question from './Sections/Question';
import Answer from './Sections/Answer';
import BulletList from './Sections/BulletList';
import NumberedList from './Sections/NumberedList';
// import Soundcloud from './Sections/Soundcloud';
import Youtube from './Sections/Youtube';
import Link from './Sections/Link';

// Export this for unit testing more easily
export class ArticleCard extends PureComponent {
  constructor() {
    super();
    this.state = {
      fireAuthorRedirect: false,
      authorName: null,
      isLeaving: false,
    };
  }

  heading = () => {
    const title = this.props.info.title;

    if (title) {
      return (
        <h1 className="pb4  pt2">{title}</h1>
      );
    }
    console.log('Not Returned: ArticleCard.heading');
    return false;
  };

  sections = (item, i) => {
    if (item) {
      switch (item.section.type) {
        case 'heading':
          return (
            <div className="pv3">
              <Heading
                key={i}
                text={item.section.text}
              />
            </div>
          );
        case 'paragraph':
          return (
            <div className="pv3">
              <Paragraph
                key={i}
                text={item.section.text}
              />
            </div>
          );
        // case 'img':
        //   return (
        //     <div className="pv3">
        //       <p>img goes here</p>
        //     </div>
        //   );
        case 'question':
          return (
            <div className="pv3">
              <Question
                key={i}
                text={item.section.text}
              />
            </div>
          );
        case 'answer':
          return (
            <div className="pv3">
              <Answer
                key={i}
                text={item.section.text}
              />
            </div>
          );
        case 'bulletList':
          return (
            <div className="pb3">
              <BulletList
                key={i}
                list={item.section.list}
              />
            </div>
          );
        case 'numberedList':
          return (
            <div className="pb3">
              <NumberedList
                key={i}
                list={item.section.list}
              />
            </div>
          );
        // case 'soundcloud':
        //   return (
        //     <div className="pv3">
        //       <Soundcloud
        //         key={i}
        //         text={item.section.text}
        //         id={item.section.id}
        //       />
        //     </div>
        //   );
        case 'youtube':
          return (
            <div className="pv3">
              <Youtube
                key={i}
                videoId="XxVg_s8xAms"
              />
            </div>
          );
        case 'link':
          return (
            <div className="pv3">
              <Link
                key={i}
                text={item.section.text}
                url={item.section.url}
              />
            </div>
          );
        default:
          console.log('Not Returned: ArticleCard.section.switch');
          return false;
      }
    }
    console.log('Not Returned: ArticleCard.sections');
    return false;
  }

  handleClick = (attr, type) => {
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
    const fireAuthorRedirect = this.state.fireAuthorRedirect;

    const article = this.props.info;
    const sections = this.sections;

    return (
      <div className={isLeavingClass}>
        <div className="articleCard">

          <figure className="rel  articleCard__hero">
            <div className="articleCard__hero--background" style={{ backgroundImage: `url(http://res.cloudinary.com/dzz8ji5lj/image/upload/${article.img})` }}></div>
            <img className="articleCard__hero--img" alt={article.title} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${article.img}`} />
          </figure>

          <section className="rel">
            <article className="container  articleCard__content">
              <div className="row">
                <div className="col-md-16  col-md-offset-4">
                  <span className="grey  t8">{article.created} | </span>
                  <span className="grey  t8  cp  link" onClick={() => this.handleClick(article.author, 'author')}>{article.author}</span>
                  {this.heading()}
                  {article.body.map((item, i) => (
                    sections(item, i)
                  ))}
                </div>
              </div>
            </article>
          </section>
        </div>
        {fireAuthorRedirect ? (
          <Redirect push to={from || `/Author/${this.state.authorName}`} />
        ) : (
          false
        )}
      </div>
    );
  }
}

ArticleCard.propTypes = {
  info: PropTypes.shape(),
  location: PropTypes.shape(),
};

ArticleCard.defaultProps = {
  info: {},
  location: {},
};

export default ArticleCard;
