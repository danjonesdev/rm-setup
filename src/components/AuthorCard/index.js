/* @flow */
/* eslint-disable import/no-named-as-default, react/no-array-index-key, react/self-closing-comp */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Export this for unit testing more easily
export class ArticleCard extends PureComponent {
  render() {
    const author = this.props.info;

    return (
      <div className="articleCard">

        <section className="rel">
          <article className="container  articleCard__content">
            <div className="row">
              <div className="col-md-16  col-md-offset-4">
                <figure className="rel  pb3">
                  <img className="mb3  center  br-100  w5  authorCard__img" alt={author.name} src={`http://res.cloudinary.com/dzz8ji5lj/image/upload/${author.img}`} />
                </figure>
                <h1 className="black  t7  pb2  cp  tac">{author.name}</h1>
                <p className="grey  t8  pv2  tac">{author.description}</p>

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
