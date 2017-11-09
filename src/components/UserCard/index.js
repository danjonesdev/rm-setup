/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';
import GetImage from '../Helpers/GetImage';

import Standard from './Sections/Standard';
import QA from './Sections/QA';
import BulletPoints from './Sections/BulletPoints';
import NumberedList from './Sections/NumberedList';

// Export this for unit testing more easily
export class UserCard extends PureComponent {
  heading = () => {
    const title = this.props.info.title;

    if (title) {
      return (
        <Heading type="h1" color="black" text={title} />
      );
    }
    console.log('Not Returned: UserCard.heading');
    return false;
  };

  sections = (item, i) => {
    if (item) {
      switch (item.section.type) {
        case 'Standard':
          return (
            <div className="pv2">
              <Standard
                key={i}
                title={item.section.title}
                content={item.section.content}
                img={item.section.img}
              />
            </div>
          );
        case 'Interview':
          return (
            <div className="pv2">
              <QA
                key={i}
                question={item.section.question}
                answer={item.section.answer}
              />
            </div>
          );
        case 'BulletPoints':
          return (
            <div className="pv2">
              <BulletPoints
                key={i}
                list={item.section.list}
              />
            </div>
          );
        case 'NumberedList':
          return (
            <div className="pv2">
              <NumberedList
                key={i}
                list={item.section.list}
              />
            </div>
          );
        case 'SoundcloudEmbed':
          return (
            <p key={i}>{item.section.type}</p>
          );
        case 'YoutubeEmbed':
          return (
            <p key={i}>{item.section.type}</p>
          );
        default:
          console.log('Not Returned: UserCard.section.switch');
          return false;
      }
    }
    console.log('Not Returned: UserCard.sections');
    return false;
  }

  render() {
    const sections = this.sections;
    return (
      <div>
        <div className="cont">
          <section id="hero-1" style={{ backgroundImage: `url(${GetImage(this.props.info._id)})` }}>
          </section>
        </div>
        <section className="rel">
          <img className="img" alt="yo" src={GetImage(this.props.info._id)} />
          <article className="container  article">
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-16">
                <div className="col-sm-24">
                  {this.heading()}
                  {this.props.info.body.map((item, i) => (
                    sections(item, i)
                  ))}
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

UserCard.propTypes = {
  info: PropTypes.shape(),
};

UserCard.defaultProps = {
  info: {},
};

export default UserCard;
