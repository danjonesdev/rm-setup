/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class ArticleCard extends PureComponent {
  render() {
    const author = this.props.info;

    return (
      <div className="container  mv4">
        <div className="row">
          <div className="link  w-100  zoom-in-fade-in-iteration--cont">
            <div className="center  tac  pv3">

              <figure className="rel  pb3  w5  center">
                <div className="br-100  authorList__img--cont">
                  <img className="mb3  center  w5  br-100  zoom-in-fade-in-iteration--item  authorList__img" alt={author.name} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${author.img}`} />
                </div>
              </figure>
              <h2 className="black  t7  pt2  tac  cp">{author.name}</h2>
              <p className="grey  t8  pv2  latestArticleList__intro">{author.description}</p>
              {author.links.map((link, i) => (
                <div key={i} className="row">
                  <p className="pb1  fornt-normal-a  dark-grey">{link.text}</p>
                  <a className="normal-font" href={link.url}>{link.url}</a>
                </div>
              ))}

            </div>
          </div>
        </div>
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
