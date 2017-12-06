/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
import Link from './Sections/Link';

// Export this for unit testing more easily
export class ArticleCard extends PureComponent {
  heading = () => {
    const title = this.props.info.title;

    if (title) {
      return (
        <h1>{title}</h1>
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
              <p>youtube embed</p>
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

  render() {
    const sections = this.sections;
    return (
      <div className="ArticleCard__cont">
        <div className="cont  rel">
          <section id="hero-1" style={{ backgroundImage: `url(${this.props.info.img})` }}></section>
          <img className="img  shadow3" alt="yo" src={this.props.info.img} />
        </div>
        <section className="rel">
          <article className="container  article">
            <div className="row">
              <div className="col-md-16 col-md-offset-4">
                {this.heading()}
                {this.props.info.body.map((item, i) => (
                  sections(item, i)
                ))}
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  info: PropTypes.shape(),
};

ArticleCard.defaultProps = {
  info: {},
};

export default ArticleCard;
