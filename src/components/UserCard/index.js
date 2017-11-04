/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Heading from '../Elements/Heading';

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
            <Standard
              key={i}
              title={item.section.title}
              content={item.section.content}
              img={item.section.img}
            />
          );
        case 'Interview':
          return (
            <QA
              key={i}
              question={item.section.question}
              answer={item.section.answer}
            />
          );
        case 'BulletPoints':
          return (
            <BulletPoints
              key={i}
              list={item.section.list}
            />
          );
        case 'NumberedList':
          return (
            <NumberedList
              key={i}
              list={item.section.list}
            />
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
        {this.heading()}
        {this.props.info.body.map((item, i) => (
          sections(item, i)
        ))}
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
