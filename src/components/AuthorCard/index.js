/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp */

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class ArticleCard extends PureComponent {
  render() {
    const author = this.props.info;

    return (
      <div className="container  mv4">
        <div className="row">
          <div className="col-md-16  col-md-offset-4">
            <div className="row">
              <div className="link  w-100  authorCard__cont">
                <div className="center  pt3">

                  <div className="col-md-6">
                    <figure className="rel  pb3  center">
                      <div className="br-100  authorCard__img--cont">
                        <img className="mb3  center  w4  br-100  zoom-in-fade-in-iteration--item  authorCard__img" alt={author.name} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${author.img}`} />
                      </div>
                    </figure>
                  </div>

                  <div className="col-md-18">
                    <Link to={`/Author/${author.name.replace(/\s+/g, '-')}`} className="link  black  t7  pt2  db  tac-md  cp  title-font  fw6  no-underline">{author.name}</Link>
                    <p className="grey  t8  pv2  tac-md">{author.description}</p>
                    <hr />
                    <div className="tac-md  pb2">
                      {author.links.map((link, i) => (
                        <a key={i} className="link  no-underline  pr3  t8  fornt-normal-a  dark-grey  authorCard__social-link" href={link.url}>{link.text}</a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
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
