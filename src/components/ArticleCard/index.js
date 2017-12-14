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
import Youtube from './Sections/Youtube';
import Link from './Sections/Link';

import LoadImage from '../Helpers/LoadImage';

// Export this for unit testing more easily
export class ArticleCard extends PureComponent {
  heading = () => {
    const title = this.props.info.title;

    if (title) {
      return (
        <h1 className="pb4">{title}</h1>
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

  render() {
    const sections = this.sections;
    return (
      <div className="articleCard">

        <figure className="rel  articleCard__hero">
          <div className="articleCard__hero--background" style={{ backgroundImage: 'url(http://res.cloudinary.com/dzz8ji5lj/image/upload/e_blur:500,q_0/v1513159094/articles/2014_2F10_2F24_2F46_2FRave.8824e.jpg)' }}></div>
          <LoadImage styles={'articleCard__hero--img'} alt={this.props.info.title} imgSrc={this.props.info.img} />
        </figure>

        <section className="rel">
          <article className="container  articleCard__content">
            <div className="row">
              <div className="col-md-16  col-md-offset-4">
                <div className="row">
                  <div className="col-sm-12">
                    <span className="db  grey  t8  pb2">10/17/09 | {this.props.info.author}</span>
                  </div>
                  <div className="col-sm-12">
                    <span className="fr  tar  db  grey  t8  pb2">10/17/09 | {this.props.info.author}</span>
                  </div>
                </div>
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
